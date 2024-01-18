import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQueries, useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:stats}=useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    return (
        <div>
            <h2>Hi Welcome Back</h2>

            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;