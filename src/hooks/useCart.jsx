import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
   const axiosSecure = useAxiosSecure();
   const {user} = useAuth();
    const { refetch, data:cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            // console.log(res.data)
            return res.data
           
        }
    })
    return [cart,refetch]
};

export default useCart;