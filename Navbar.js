import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="menuitem">
                <ul>
                    <li><Link to="/bear_spread_call">Bear Spread using call</Link></li>
                    <li><Link to="/bear_spread_put">Bear Spread usng put</Link></li>
                    <li><Link to="/bear_spread_call">Bull Spread using call</Link></li>
                    <li><Link to="/bull_spread_put">Bull Spread using put</Link></li>
                    <li><Link to="/butterfly_spread">Butterfly Spread</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
