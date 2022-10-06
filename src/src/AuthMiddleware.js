import {isFunction} from 'lodash';

function authMiddleware(opts) {
    const {
        token: tokenOrThunk,
        tokenRefreshPromise,
        prefix = 'Bearer ',
        header = 'Authorization',
    } = opts || {};

    let tokenRefreshInProgress = null;

    return (next) => async (req) => {
        try {
            // $FlowFixMe
            const token = await (isFunction(tokenOrThunk) ? tokenOrThunk(req) : tokenOrThunk);

            if (token) {
                req.fetchOpts.headers[header] = `${prefix}${token}`;
            }

            const res = await next(req);

            // Graphene returns 200 and only add's an error with a string
            if ('errors' in res && res['errors'].length && res['errors'][0].message === 'Signature has expired') {
                throw new Error('Expired Token');
            }

            return res;
        } catch (e) {
            if (e && tokenRefreshPromise) {
                if (e.message === 'Expired Token') {
                    if (tokenRefreshPromise) {
                        if (!tokenRefreshInProgress) {
                            tokenRefreshInProgress = Promise.resolve(tokenRefreshPromise(req, e.res))
                                .then((newToken) => {
                                    tokenRefreshInProgress = null;
                                    return newToken;
                                })
                                .catch((err) => {
                                    tokenRefreshInProgress = null;
                                    throw err;
                                });
                        }

                        return tokenRefreshInProgress.then((newToken) => {
                            const newReq = req.clone();
                            newReq.fetchOpts.headers[header] = `${prefix}${newToken}`;
                            return next(newReq); // re-run query with new token
                        });
                    }
                }
            }

            throw e;
        }
    };
}


export default authMiddleware;