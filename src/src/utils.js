const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const FORCE_GWLAB = !process.env.NODE_ENV || process.env.FORCE_DOMAIN === 'gwlab';
const FORCE_GWCLOUD = !process.env.NODE_ENV || process.env.FORCE_DOMAIN === 'gwcloud';

function isGwLab() {
    if (FORCE_GWLAB) {
        return true;
    }

    if (FORCE_GWCLOUD) {
        return false;
    }

    // Match the host name against (*.)gwlab.org.au
    // This will also check for subdomains if we decide to use them in the future
    return (/(^|\.)gwlab\.org\.au$/.test(location.hostname));
}

export {
    IS_DEV,
    isGwLab
}