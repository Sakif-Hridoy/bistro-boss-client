import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
// import SectionTitle from '../../../components/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import drinksImg from "../../../assets/menu/menu-bg.png"
const Menu = props => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
    const drinks = menu.filter(item=>item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* <SectionTitle subHeading="Dont Miss" heading="Todays Offer"></SectionTitle>
            <MenuCategory items={offered} title="Offered Items"></MenuCategory>
            <MenuCategory items={dessert} title="desserts" img={dessertImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={drinks} title="drinks" img={drinksImg}></MenuCategory> */}
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;