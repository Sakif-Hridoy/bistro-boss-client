import axios from 'axios';
import React from 'react';

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors',token)
    })

 return axiosSecure;
}

export default useAxiosSecure;