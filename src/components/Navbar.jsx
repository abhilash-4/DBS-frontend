import React from 'react';
import { useState, useEffect } from 'react';
import rcb from '../assets/PAY.png'

function Navbar() {

    const [isEmp,SetEmp] = useState(false);
    const [isLoggedIn,SetLogin] = useState(false)

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const isLoggedIn = true;
            SetLogin(isLoggedIn);
        }
        if (user && user.roles[0] === "Employee" ) {
            SetEmp(true);
        }
       
    },[isEmp]);
    return (
        
            <nav className="bg-sky-50 text-indigo-600">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-2 px-2">
                                <img src={rcb}  width={80} alt="RCB" />
                                {/* <span className="font-bold text-2xl">RCB PAY</span> */}
                            </a>

                            
                        </div>
                        

                       
                    </div>
                    <div  className="hidden md:flex items-center space-x-1">
                       
                           
                    { !isLoggedIn 
                                ?
                                <div> 
                                <a href="login" className="py-2 px-3 font-bold bg-sky-50 hover:text-green-600 text-indigo-600 rounded-lg">Login</a>
                                </div>
                                 
                            : 
                                ( !isEmp ?
                                <div>

                                    <a href="profile" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Profile</a>

                                    <a href="transfer" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Transfer</a>
                                    <a href="transaction" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Transactions</a>
                                
                                </div>  
                                :
                                <div>
                                    <a href="/transfer" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Transfer</a>
                                    <a href="/dashboard" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Dashboard</a>   
                                    <a href="/transaction" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Transactions</a>
                                    <a href="/profile" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Profile</a>
                                    <a href="/signup" className="py-2 px-3 font-bold bg-sky-50  hover:text-green-600 text-indigo-600 rounded-lg">Signup</a>
                                
                                </div>
                                )
                            
                            
                    }

               
                    </div>
                    
                    </div>
                </div>
               
            </nav>
            
        
    );
}

export default Navbar