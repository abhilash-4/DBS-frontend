
import User from '../assets/User.png'
import './style.css';
import React, { useState, useEffect } from 'react';

import UserService from '../services/UserService';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const [data, setData] = useState([]);
  
    const navigate = useNavigate();


    useEffect(() => {
        const getDetails = async () => {
            UserService.getMyDetails().then((res => {
                
                
                setData(res);
                console.log(res);
            
            }));
            
           
        }
        
        getDetails();
      },[])

   

    const LogoutHandler = (e) => {
        AuthService.logout();
        window.location.reload(navigate('/'));
        navigate('/')
    }
    
    return (
        <div className="py-40 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/transfer.jpg?alt=media&token=a254c128-2de9-4f9a-8edf-e3156dc36158")'}}>
   
   <div className="container mx-auto p-4">
        <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-600"> PROFILE </h1>
            <div className="bg-sky-50 rounded-lg shadow-lg overflow-hidden ">
                <div className="px-40 pt-6">
                    <div className="overflow-hidden relative bg-gray-100 rounded-full dark:bg-gray-600">
                        <img src={User} height={180} width={180} alt="User png"/>
                    </div>    
            </div>
          
            <div className="flex items-center text-indigo-600 font-extrabold justify-center w-full mb-5 mt-5">
                        <p>Account Holder Name : {data.accHolderName }</p>
            </div>
            <div className="flex items-center text-indigo-600  font-extrabold justify-center w-full mb-5">
                        <p>Customer Id : {data.id}</p>
            </div>
            <div className="flex items-center text-indigo-600 font-extrabold justify-center w-full mb-5">
                        <p>Clear Balance : {data.clearBalance}</p>
            </div>
            <div className="flex items-center text-indigo-600 font-extrabold justify-center w-full mb-5">
                <p className="mr-5">Over Draft</p>
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" checked={!!data.overdraft} readOnly id="toggleB" className="sr-only" />
                    <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                </label>
                    </div>
                    
                    <div className="flex items-center font-extrabold justify-center w-full mb-5">
                    <a onClick={LogoutHandler} href="/home" className="py-2 px-3 font-bold bg-indigo-600 text-white rounded shadow hover:bg-green-700">Logout</a>
            </div>
            </div>
        </div>
            </div>
            </div>
  )
}

export default Profile;