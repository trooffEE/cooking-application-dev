import React from 'react';
import { Link } from 'react-router-dom';

const NavigationNotLoggedIn = () => {
    return (
        <>
          <Link to="/" >
            <span>About</span>
          </Link>  
        </>
    );
}

export default NavigationNotLoggedIn;
