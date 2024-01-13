import React from 'react';
import PropTypes from 'prop-types';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = props => {
    const axiosSecure = useAxiosSecure();
    const {refetch,data:users=[]} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users',{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
              }
            });
            console.log(res.data)
            return res.data
        }
    })

    const handleDeleteUser = (id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  refetch();
      
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                } else {
                }
              });
            }
          });
    }

    const handleMakeAdmin = (user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
        })
    }

    return (
        <div>
           <div className='flex justify-evenly my-4'>
            <h2>Allusers</h2>
            <h2>Total Users:{users.length}</h2>
           </div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map((user,index)=> <tr>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
           {
                user.role === 'admin' ? 'Admin' :  <button
                onClick={()=>handleMakeAdmin(user)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaUsers></FaUsers>
                      </button>
           }
            </td>
            <td>
            <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

AllUsers.propTypes = {
    
};

export default AllUsers;