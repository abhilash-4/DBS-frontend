import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal";
import AuthService from "../services/AuthService";
import Spinner from "./Spinner";

function Login(props) {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [modalOpen, setModalOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        AuthService.login(data).then(
            (response) => {
                console.log(response.data);
                navigate('/verify')
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
        });
        
    }
  
    // const [username,setUsername] = useState("");
    // const [password,setPasword] = useState("");
    // const [modalOpen,setModalOpen] = useState(false);
    
    // const onUsernameChange = (e) => {
    //     const username = e.target.value;
    //     setUsername(username);
    // }

    // const onPassChange = (e) => {
    //     const password = e.target.value;
    //     setPasword(password);
    // }


    // const LoginHandler =(e)=>{
    //     console.log("logged in")
        
    //     console.log(username)
    //     console.log(password)
    //     // alert("logged in");
    // }
    
    
    return (

        <div className="py-30  bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/login.jpg?alt=media&token=4ff70c8c-edfc-47da-88b7-53be9aa01703")'}}>
   
        
    <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
                <h1 className="m-4 text-center text-4xl font-extrabold text-gray-900">LOG IN</h1>
                
                {!isLoading ? 
                    <div className="bg-slate-100 rounded-lg overflow-hidden ">
                    <div className="p-8">                 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">UserName</label>
                            <input type="text" name="username" 
                             
                             className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                             {...register("username", { required: true, maxLength: 10 })} />
                             {errors.username && <p className="text-red-600">Please check the First Name</p>}
                        </div>
                        <div>
                     
                        </div>
                
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input type="password" name="password" 
                             required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                             {...register("password", { required: true, maxLength: 10 })}
                             />
                             {errors.password && <p className="text-red-600">Please check the password</p>}
                        </div>
                        <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700">Login</button>
                    </form>
                    </div>
                <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <div className="button mt-6 flex items-center">
                        <button type="button" onClick={()=> {
                            setModalOpen(true);
                    }} className="text-gray-600">Forgot Password</button> 
  
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
               </div>
                </div>
           
                    </div>
                    : <div>
                    <Spinner /> 
                 </div> }
        </div>
            </div>
            </div>

  )
}

export default Login