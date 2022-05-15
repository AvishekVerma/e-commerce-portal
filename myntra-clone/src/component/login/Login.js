import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {
    return(
        <div className='login-wrapper'>
            <div className='login-form'>
                <div className='banner-img'>
                    <img alt='banner-img' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg' />
                </div>
                <div className='form-container'>
                      <LoginForm changeUserData={props.changeUserData} />   
                </div>

            </div>
            
        </div>
    )
}

export default Login;
