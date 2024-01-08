import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useMenu = props => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data)})
    },[])
    return [menu]
};

useMenu.propTypes = {
    
};

export default useMenu;