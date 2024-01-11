import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import {FaShoppingCart} from 'react-icons/fa'
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import useCart from '../../../hooks/useCart';

const Navbar = props => {

  // const [cartData,setCartData] = useState([]);
  const [cart] = useCart()

  // useEffect(()=>{
  //   axiosSecure.get('/carts')
  //   .then(res=>setCartData(res.data))
  // },[])

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .then(err=>console.log(err))
  }

    const navOptions = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/menu">Our Menu</NavLink></li>
    <li><NavLink to="/secret">Secret</NavLink></li>
    <li><NavLink to="/order/salad">Order Food</NavLink></li>
    <li>
      <Link to="/"><button className="btn">
 <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">{cart.length}</div>
</button></Link>
    </li>
    
    {
      user? <>
      <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
      </> :<><li><NavLink to="/login">Login</NavLink></li></>
    }
    
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;