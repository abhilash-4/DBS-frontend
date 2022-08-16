import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/AuthService";
import Spinner from './Spinner'

function Verifyotp() {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);


  const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        AuthService.verify(data).then(
          (response) => {
            localStorage.setItem("otpStatus",response.message);
            console.log(response);
            if (response.message === "approved") {
              
              
              window.location.reload(navigate('/home'));
              navigate('/home')
            }
            else {
              setLoading(false);
              navigate('/verify')
            }
           
        },
        (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          setLoading(false);
          console.log(resMessage);
          navigate('/')
          
        });
        
        
       
    }
  return (
    <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin"> One Time Password</h1>
        
            {!isLoading ? 
            <div className="bg-slate-100 rounded-lg overflow-hidden ">
                <div className="p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">OTP</label>
                              <input
                                  type="number"
                                  placeholder="One Time Password"
                                    name='otp'
                                  {...register("otp", { required: true, maxLength: 76 })} 
                                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                            />
                             {errors.otp && <p className="text-red-600">Please Enter a valid OTP sent your number</p>}
                        </div>
                        
                        <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700">Login</button>
                    </form>
                    </div>
            
            
          
          </div>
          : <div>
            <Spinner />
         </div> }
        </div>
    </div>

  )
}

export default Verifyotp