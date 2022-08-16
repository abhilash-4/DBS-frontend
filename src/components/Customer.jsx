import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/AuthService";

function Customer() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [phone, setPhone] = useState("");
    const [ipAddress, setIpAddress] = useState("");

    useEffect(() => {
        AuthService.getIp().then((res) => {
            setIpAddress(res.IPv4);
            console.log(res.IPv4); 
        })
     
       
    }, [])
    
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onCustChange = (e) => {
        setCustomerId(e.target.value);
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleSubmit = (e) => {

       
        e.preventDefault();
        const formData = {
            username: username,
            password: password,
            customerId: customerId,
            phone: phone,
            ipAddress:ipAddress,
        }
        
        console.log(formData);
        AuthService.signup(formData).then(
            (response) => {
                console.log(response);
        });
        
        
        navigate('/home')
    }


    return (
        <div className="py-40 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/login.jpg?alt=media&token=4ff70c8c-edfc-47da-88b7-53be9aa01703")'}}>
   
        <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
            <div className="bg-slate-100 rounded-lg overflow-hidden ">
                    <div className="p-8">                 
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">UserName</label>
                            <input type="text" name="username" 
                              value={username}
                              onChange={onUsernameChange}
                             className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                            />
                        </div>
                    
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input type="password" name="password"
                            value={password}
                            onChange={onPasswordChange}
                             required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                             />
            </div>
            
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">CustomerId</label>
                            <input  id="customerId"
                                type="text"
                            value={customerId}
                            onChange={onCustChange}
                             required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                             />
            </div>
            
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">Phone</label>
                            <input  id="phone" type="text"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={onPhoneChange}
                             required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                             />
                        </div>
                        <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700">Signup </button>
                    </form>
                    </div>
                <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                </div>
           
                    </div>
            </div>
            </div>
            </div> 


  )
}
export default Customer;



