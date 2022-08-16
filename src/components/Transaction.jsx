import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';

const Transaction = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
        UserService.getAllTrans().then((res => {
            
            setData(res);
            console.log(res);
        
        }));
        
       
    }
    
    getDetails();
  },[])
  return (
    <div >
  <div className="container mx-auto p-4">
    <div className="py-20">
      <div className="flex items-center px-3">
        
        <span className="w-1/4">
           <span className="text-xs uppercase text-white-600 font-extrabold">Transaction Id</span>
        </span>
        <span className="w-1/4">
          <span className="text-xs uppercase text-white-600 font-extrabold">Receiver Name</span>
        </span>
        <span className="w-1/4">
          <span className="text-xs uppercase text-white-600 font-extrabold">Transfer Amount</span>
        </span>
        <span className="w-1/4">
         <span className="text-xs uppercase text-white-600 font-extrabold">Transfer Date</span>
            </span>
            <span className="w-1/4">
         <span className="text-xs uppercase text-white-600 font-extrabold">Status</span>
        </span>
          </div>
          

          {data && data.map((item, index) => (
              <div className="hover:bg-slate-200 bg-indigo-200 cursor-pointer shadow flex p-5 items-center mb-5 rounded-lg">
                <div className="w-1/4">
                  <div className="flex items-center">
                    <div className="ml-4">
                    <span className="capitalize block text-white-800">{item.transactionId }</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
                <span className="capitalize text-white-600 text-sm">{item.recAccName}</span>
                </div>
                <div className="w-1/4">
                  <span className="capitalize text-white-600 text-sm">{item.amount}</span>
                </div>
                <div className="w-1/4">
                  <span className="text-white-600 text-sm">{item.date}<div className="w-1/4">
                  </div></span>
              </div>
              
              <div className="w-1/4">
                  <span className="text-white-600 text-sm">{item.status}<div className="w-1/4">
                  </div></span>
               </div>
                    
            
              </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default Transaction;


// {data && data.map((item, index) => ())}
