import React from 'react';
import PropTypes from 'prop-types';
import { FaGoogle } from 'react-icons/fa';
import useAuth from "../../hooks/useAuth"
import { axiosPublic } from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = props => {
    const {googleSignIn} = useAuth()
    
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                email:res.user.email
            }

            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })

        })
    }
    return (
        <div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn">
 <FaGoogle></FaGoogle>
  Sign In with Google
</button>
            </div>
        </div>
    );
};

SocialLogin.propTypes = {
    
};

export default SocialLogin;