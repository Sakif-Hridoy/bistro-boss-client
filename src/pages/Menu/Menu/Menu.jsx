import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Menu = props => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <h2>Menu</h2>
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;