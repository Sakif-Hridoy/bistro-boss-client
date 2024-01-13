import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('iterceptors',token)
        config.headers.authorization = `Bearer ${token}`
        return config;  
    },function(error){
        return Promise.reject(error)
    }
    )


    axiosSecure.interceptors.response.use(function(response){
    return response    
    },async function(error){
        const status = error.response.status;
        console.log('error in the interceptor',status)
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    }
    )

 return axiosSecure;
}

export default useAxiosSecure;