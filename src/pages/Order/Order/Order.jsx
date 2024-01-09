import React, { useState } from "react";
import PropTypes from "prop-types";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad','pizza','soup','dessert','drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex,setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
    // console.log(category)
    
    const salad = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const soup = menu.filter(item=>item.category === 'soup')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const drinks = menu.filter(item=>item.category === 'drinks')
    const offered = menu.filter(item=>item.category === 'offered')
    
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <div>
      <OrderTab items={salad}></OrderTab>
    {/* {
        salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    } */}
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-3 gap-10">
    {
        pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-3 gap-10">
    {
        soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-3 gap-10">
    {
        dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid md:grid-cols-3 gap-10">
    {
        drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div>
  </TabPanel>
</Tabs>
    </div>
  );
};

Order.propTypes = {};

export default Order;
