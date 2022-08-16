// import React, { useEffect } from 'react'
// import { useState } from 'react';

// import Response from '../response/Response';
// import UserService from '../services/UserService';



// const Transfer = () => {

    

//     const [customerId, setCustomerId] = useState("");
//     const [accHolderName, setAccHolderName] = useState("");
//     const [clearbalance,setClearbalance] = useState(0);
//     const [currencyCode,setCurrencyCode] = useState("");
//     const [receiverBIC, setReceiverBIC] = useState("");
//     const [bankName,setbankName] = useState("");
//     const [recAccountNumber,setRecAccountNumber] = useState("");
//     const [recAccountName,setRecAccountName] = useState("");
//     const [transferTypeCode,setTransferTypeCode] = useState("");
//     const [messageCode,setMessageCode] = useState("");
//     const [currencyAmount,setCurrencyAmount] = useState("");
//     const [transferFee,setTransferFee] = useState("");
//     const [inrAmount, setInrAmount] = useState("");

//     const [isOverdraft, setOverdraft] = useState(false);

//     const [messageList, setMessageList] = useState([]);

//     useEffect(() => {
//         const getMessageList = async () => {
//             const data = await UserService.getAllMessageCodes().then((res => {
                
                
//                 setMessageList(res);
//                 console.log(res[0].messagecode);
            
//             }));
            
           
//         }     
//         getMessageList();
//     },[])
    

    
//     const [modalOpen, setModalOpen] = useState(false);
//     const [resp, setResp] = useState([]);
//     // const onSubmit = (data) => {

//     //     // const formData = {
//     //     //     customerId:data.customerId,
//     //     //     currencyCode: data.currencyCode,
//     //     //     receiverBIC:data.receiverBIC,
//     //     //     recAccountNumber : data.recAccountNumber,
//     //     //     recAccountName:  data.recAccountName,
//     //     //     transferTypeCode:data.transferTypeCode,
//     //     //     messageCode:data.messageCode,
//     //     //     currencyAmount:data.currencyAmount,
//     //     //     transferFee:data.transferFee,
//     //     //     inrAmount:data.inrAmount,
//     //     // }
//     //     console.log(data);
//     // }

    
//     //Customer data fill
//     const handleKeyDown = (event) => {

//         // const data = UserService.getCustomerDetails(customerId).then((res => {

           
//         //     console.log(res);
//         //     const accHolderName = res.accHolderName;
//         //     const clearbalance = res.clearBalance;
//         //     setAccHolderName(accHolderName);
//         //     setClearbalance(clearbalance);
            
        
//         // }));

       

        
//         if (event.key === 'Enter' || event.key === 'mouseout') {

//             const data = UserService.getCustomerDetails(customerId).then((res => {
//                 console.log(res);
//                 const accHolderName = res.accHolderName;
//                 const clearbalance = res.clearBalance;
//                 setAccHolderName(accHolderName);
//                 setClearbalance(clearbalance);
//                 setOverdraft(res.overdraft)
                
               
            
//             }));

            
            
//         }

//     }
//     //bank data fill
//     const handleBankdata = (event) => {
//         if (event.key === 'Enter') {

//             const data = UserService.getBankDetails(receiverBIC).then((res => {
//                 const bankName = res.bankName;
//                 setbankName(bankName);
//                 console.log(res);
               
            
//             }));
            
//         }
//     }


//     const onCustomerIdChange = (e) => {
        
//         const customerId = e.target.value;
//         setCustomerId(customerId);
//     }

//     const onCurrencyCodeChange= (e) => {
//         const currencyCode = e.target.value;
//         setCurrencyCode(currencyCode);
//     }

//     const onReceiverBICChange = (e) => {
//         const receiverBIC =e.target.value;
//         setReceiverBIC(receiverBIC);
//     }

//     const onRecAccountNumberChange = (e) => {
//         const recAccountNumber= e.target.value;
//         setRecAccountNumber(recAccountNumber);
//     }

//     const onRecAccountNameChange = (e) => {
//         const recAccountName = e.target.value;
//         setRecAccountName(recAccountName);
//     }

//     const onTransferTypeCodeChange = (e) =>{
//         const transferTypeCode = e.target.value;
//         setTransferTypeCode(transferTypeCode);
//     }

//     const onMessageCodeChange = (e) => {
//         const messageCode = e.target.value;
//         setMessageCode(messageCode);
//     }

//     const onCurrencyAmountChange = (e) => {
//         const currencyAmount = e.target.value;
     
//         if (currencyAmount > clearbalance & !isOverdraft) {
            
//             setCurrencyAmount("");
//             setTransferFee("");
//             setInrAmount("");
//         }
//         else {
            
//             setCurrencyAmount(currencyAmount);
//             const transferFee = (currencyAmount / 100) * 0.25;
//             setTransferFee(transferFee);

//             if (currencyCode === "INR") {
//                 const inrAmount = currencyAmount;
//                 setInrAmount(inrAmount);
//             }
//             else if (currencyCode === "USD") {
//                 const inrAmount = currencyAmount * 74;
//                 setInrAmount(inrAmount);
//             }
//             else if (currencyCode === "EUR") {
//                 const inrAmount = currencyAmount * 90;
//                 setInrAmount(inrAmount);
//             }
//             else if (currencyCode === "GBP") {
//                 const inrAmount = currencyAmount * 50;
//                 setInrAmount(inrAmount);
//             }
//         }
//     }



//     // const onTransferFeeChange = (e) => {
//     //     const transferFee = e.target.value;
//     //     setTransferFee(transferFee);
//     // }

//     const onInrAmountChange = (e) => {
//         const inrAmount = e.target.value;
//         setInrAmount(inrAmount);
//     }

//     const SubmitHandler = (e) => {
        
//         e.preventDefault();
//         const formData = {
//             customerId: customerId,
//             currencyCode: currencyCode,
//             receiverBIC: receiverBIC,
//             recAccountNumber: recAccountNumber,
//             recAccountName: recAccountName,
//             transferTypeCode: transferTypeCode,
//             messageCode: messageCode,
//             currencyAmount: currencyAmount,
//             transferFee: transferFee,
//             inrAmount: inrAmount,
//         };

//         const r = {
//             response: resp,
//             result:""
//         }

//         UserService.SaveTransaction(formData).then(
//             (response) => {
//                 console.log(response);
//                 const resp = response.data;
//                 r.result = "Success"
//                 setResp(r);
//                // console.log(response.data);
//         },
//         (error) => {
//             const resMessage =
//               (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//               error.message ||
//               error.toString();

//             r.response = resMessage;
//             r.result = "Failed"
//             setResp(r);
          
//         });
        
//         console.log(formData);
//         console.log(resp);
//         setModalOpen(true);
//         localStorage.setItem("dataTransfer", JSON.stringify(formData));
//     }

//     return (
//       <div className='bg-hero-pattern'>
      
   
//     <div className="container mx-auto p-8 ">
//     <div className="max-w-md w-full mx-auto">
               
                    
//         <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-600"> Transfer Money </h1>
//               <div className="rounded-lg overflow-hidden bg-sky-70 shadow-lg">
           
//                 <div className="p-6 ">
//                     <form  >
//                         <div className="mb-5 ">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Customer Id</label>
//                             <input type="text" name="customerId" id="customerId" value={customerId} onChange={onCustomerIdChange}  onMouseOut={handleKeyDown} onKeyUp={handleKeyDown} className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                           </div>
//                           {/* ACCOUNT HOLDER NAME */}
//                           <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Acccount Holder Name</label>
//                                     <input type="text"
//                                         name="AccountHolderName"
//                                         id="AccountHolderName"
//                                         readOnly value={accHolderName}
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                           </div>
                          
//                           <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Clear balance</label>
//                                     <input type="text"
//                                         name="AccountHolderName"
//                                         id="AccountHolderName"
//                                         value={clearbalance}
//                                         readOnly
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                         </div>
//                         {/* ---------  cutomer data complete*/}
//                         <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Currency Code</label>
//                             <select id="currencyCode" value={currencyCode}
//                                   onChange={onCurrencyCodeChange} required
//                                   className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none">
//                                         <option value="" defaultValue="Select an Option"
//                                             disabled hidden>Select an Option</option>
//                                 <option value="INR">INR</option>
//                                 <option value="USD">USD</option>
//                                 <option value="EUR">EUR</option>
//                                 <option value="GBP">GBP</option>
//                                 <option value="JPY">JPY</option>
//                           </select>
//                         </div>
//                             <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Receiver BIC</label>
//                                     <input type="text"
//                                         name="receiverBIC"
//                                         id="receiverBIC"
//                                         value={receiverBIC}
//                                         onChange={onReceiverBICChange}
//                                         onKeyDown={handleBankdata}
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                           </div>
                          
//                           <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Institution Name</label>
//                                     <input type="text"
//                                         name="receiverBIC"
//                                         id="receiverBIC"
//                                         value={bankName}
//                                         readOnly
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                             </div>

//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Receiver Account Number</label>
//                                     <input type="text" name="recAccountNumber"
//                                         id="recAccountNumber"
//                                         value={recAccountNumber}
//                                         onChange={onRecAccountNumberChange}
//                                         required
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                       </div>
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Receiver Account Name</label>
//                                     <input type="text"
//                                         name="recAccountName"
//                                         id="recAccountName"
//                                         value={recAccountName}
//                                         onChange={onRecAccountNameChange}
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                       </div>
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Transfer Type Code</label>
                            
//                                     <select type="text"
//                                         name="transferTypeCode"
//                                         id="transferTypeCode"
//                                         value={transferTypeCode}
//                                         onChange={onTransferTypeCodeChange}
//                                         required
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none">
//                               <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
//                                   <option value="CT">Customer Transfer</option>
//                         <option value="BT">Bank Transfer</option>
//                         <option value="BTOA">Bank Transfer For Own Account</option>
//                         </select>
//                       </div>
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Message Code</label>
//                                     <select
//                                         type="text"
//                                         name="messageCode"
//                                         id="messageCode"
//                                         value={messageCode}
//                                         onChange={onMessageCodeChange}
//                                         required
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none">                   
                
//                                         <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
//                                         {messageList && messageList.map((item, index) => (                
//                                             <>
//                                                 <option value={item.messagecode}> {item.messagecode} </option>
//                                                 {/* <option value="CORT">CORT</option>
//                                                 <option value="HOLD">HOLD</option>
//                                                 <option value="INTC">INTC</option>
//                                                 <option value="PHOB">PHOB</option>
//                                                 <option value="PHOI">PHOI</option>
//                                                 <option value="PHON">PHON</option>
//                                                 <option value="REPA">REPA</option>
//                                                 <option value="SDVA">SDVA</option> */}
//                                             </> 
//                         ))}                    
//                     </select>
//                       </div>
               
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Currency Amount</label>
//                                     <input type="number" name="currencyAmount"
//                                         required id="currencyAmount"
//                                         value={currencyAmount}
//                                         onChange={onCurrencyAmountChange}
//                                   className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                               {/* { (currencyAmount > clearbalance &  isOverdraft)  && <p className="text-red-600">Currency amount must be less than clear balance</p>} */}
//                       </div>    
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">Transfer Fee</label>
//                                     <input type="number"
//                                         disabled name="transferFee"
//                                         id="transferFee" 
//                                         value={transferFee}
//                                         onChange={onCurrencyAmountChange}
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                       </div>
                      
//                       <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-indigo-600">INR Amount</label>
//                                     <input type="text"
//                                         name="inrAmount" id="inrAmount" 
//                                         value={inrAmount}
//                                         onChange={onCurrencyAmountChange}
//                                         required
//                                         className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
//                       </div>
//                           <button onClick={SubmitHandler} type="button" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700">Make Payment</button>
//                           {modalOpen && <Response setOpenModal={setModalOpen} resp={resp} />}
//                     </form>
//                   </div>
                  
//                 {/* <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                     
//                 </div> */}
//             </div>
//         </div>
//             </div>
//     </div>
//   )
// }

// export default Transfer;