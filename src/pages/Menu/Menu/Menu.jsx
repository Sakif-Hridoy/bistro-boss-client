import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = props => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;