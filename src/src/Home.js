import React from 'react'
import Link from 'found/lib/Link';

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <p><Link to="/auth/" activeClassName="selected" exact>
                    Auth Login
                </Link></p>
                <p><Link to="/auth/register/" activeClassName="selected" exact>
                    Auth Register
                </Link></p>
            </div>
        );
    }
}

export default Home;