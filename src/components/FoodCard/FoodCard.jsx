import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleAddToCart=(food)=>{
      if(user && user.email){

      }
      else{
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please Login To Add Products To Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login",{state:{from:location}})
          }
        });
      }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure><p>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>{handleAddToCart(item)}} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;