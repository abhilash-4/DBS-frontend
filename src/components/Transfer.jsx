import React, { useEffect } from 'react'
import { useState } from 'react';

import Response from '../response/Response';
import UserService from '../services/UserService';

function Transfer() {


  const [customerId, setCustomerId] = useState("");
    const [accHolderName, setAccHolderName] = useState("");
    const [clearbalance,setClearbalance] = useState("");
    const [currencyCode,setCurrencyCode] = useState("");
    const [receiverBIC, setReceiverBIC] = useState("");
    const [bankName,setbankName] = useState("");
    const [recAccountNumber,setRecAccountNumber] = useState("");
    const [recAccountName,setRecAccountName] = useState("");
    const [transferTypeCode,setTransferTypeCode] = useState("");
    const [messageCode,setMessageCode] = useState("");
    const [currencyAmount,setCurrencyAmount] = useState("");
    const [transferFee,setTransferFee] = useState("");
  const [inrAmount, setInrAmount] = useState("");
  const [availableBalance, setAvailBalance] = useState("");

    const [isOverdraft, setOverdraft] = useState(false);

  //FOR DROP DOWN
  const [messageList, setMessageList] = useState([]);
  const [transferList, setTransferList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);


  useEffect(() => {
      
          UserService.getAllMessageCodes().then((res => { 
            setMessageList(res);
            
          }));  

          UserService.getAllTransferCodes().then((res => { 
            setTransferList(res);
            console.log(res);
          }));

          UserService.getAllCurrencyCodes().then((res => { 
            setCurrencyList(res);
            console.log(res);
          }));
     
    },[])
    

    
    const [modalOpen, setModalOpen] = useState(false);
    const [resp, setResp] = useState([]);
    
    //Customer data fill
    const handleKeyDown = (event) => {
      
        if (event.key === 'Enter' | customerId.length === 14 ) {

            UserService.getCustomerDetails(customerId).then((res => {
                console.log(res);
                const accHolderName = res.accHolderName;
                const clearbalance = res.clearBalance;
                setAccHolderName(accHolderName);
                setClearbalance(clearbalance);
                setOverdraft(res.overdraft)
            }));

            
            
        }

    }
    //bank data fill
    const handleBankdata = (event) => {
        if (event.key === 'Enter') {

          UserService.getBankDetails(receiverBIC).then((res => {
                const bankName = res.bankName;
                setbankName(bankName);
                console.log(res);
          }));
            
        }
    }

  
    const onCustomerIdChange = (e) => {
        
        const customerId = e.target.value;
        setCustomerId(customerId);
    }

    const onCurrencyCodeChange= (e) => {
        const currencyCode = e.target.value;
        setCurrencyCode(currencyCode);
    }

    const onReceiverBICChange = (e) => {
        const receiverBIC =e.target.value;
        setReceiverBIC(receiverBIC);
    }

    const onRecAccountNumberChange = (e) => {
        const recAccountNumber= e.target.value;
        setRecAccountNumber(recAccountNumber);
    }

    const onRecAccountNameChange = (e) => {
        const recAccountName = e.target.value;
        setRecAccountName(recAccountName);
    }

    const onTransferTypeCodeChange = (e) =>{
        const transferTypeCode = e.target.value;
        setTransferTypeCode(transferTypeCode);
    }

    const onMessageCodeChange = (e) => {
        const messageCode = e.target.value;
        setMessageCode(messageCode);
    }

    const onCurrencyAmountChange = (e) => {
        const currencyAmount = e.target.value;
     
        if (inrAmount > clearbalance & !isOverdraft) {
            
            setCurrencyAmount("");
            setTransferFee("");
            setInrAmount("");
            setAvailBalance(clearbalance);
        }
        else {
            
            setCurrencyAmount(currencyAmount);
            const transferFee = (currencyAmount / 100) * 0.25;
            setTransferFee(transferFee);
            
            if (currencyCode === "INR") {
                const inrAmount = currencyAmount;
              setInrAmount(inrAmount);
              setAvailBalance( clearbalance - inrAmount);
            }
            else if (currencyCode === "USD") {
                const inrAmount = currencyAmount * 74;
              setInrAmount(inrAmount);
              setAvailBalance( clearbalance - inrAmount);
            }
            else if (currencyCode === "EUR") {
                const inrAmount = currencyAmount * 90;
              setInrAmount(inrAmount);
              setAvailBalance( clearbalance - inrAmount);
            }
            else if (currencyCode === "GBP") {
              const inrAmount = currencyAmount * 50;
              setInrAmount(inrAmount);
              setAvailBalance( clearbalance - inrAmount);
            }
        }
    }




    const SubmitHandler = (e) => {
        
        e.preventDefault();
        const formData = {
            customerId: customerId,
            currencyCode: currencyCode,
            receiverBIC: receiverBIC,
            recAccountNumber: recAccountNumber,
            recAccountName: recAccountName,
            transferTypeCode: transferTypeCode,
            messageCode: messageCode,
            currencyAmount: currencyAmount,
            transferFee: transferFee,
            inrAmount: inrAmount,
        };
      

        const r = {
            response: resp,
            result:""
        }

        UserService.SaveTransaction(formData).then(
            (response) => {
                console.log(response);
                const resp = response.data;
            r.result = "Success"
            r.response = resp.message;
            console.log(resp);
            setResp(r);
               // console.log(response.data);
        },
        (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            r.response = resMessage;
            r.result = "Failed"
            setResp(r);
          
        });
        
        console.log(formData);
        console.log(resp);
        setModalOpen(true);
        localStorage.setItem("dataTransfer", JSON.stringify(formData));
    }

  return (
    <div className="p-10 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/transfer.jpg?alt=media&token=a254c128-2de9-4f9a-8edf-e3156dc36158")'}}>
   
      <div className='mx-auto p-4 w-1/2'>
          <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-600">  Money Transfer </h1>
            
          <form className="w-full max-w-l g">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    {/* Customer ID */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Customer Id
                </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" name="customerId"
                        id="customerId" value={customerId}
                        onChange={onCustomerIdChange}
                        onMouseOut={handleKeyDown}
                        onKeyUp={handleKeyDown}
                  />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    {/* Acccount Holder Name */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Account Holder Name
                </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      name="AccountHolderName"
                      id="AccountHolderName"
                      readOnly value={accHolderName}
                  />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
                {/* Clear Balance        */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Clear Balance
                </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="clear Balance"
                      id="Clearbalance"
                      value={clearbalance}
                      readOnly
                  />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
                    {/* Currency Code */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Currency Code
                </label>
                <div className="relative">
                        <select id="currencyCode"
                          value={currencyCode}
                          onChange={onCurrencyCodeChange}
                          required
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                   <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
                  
                 {currencyList && currencyList.map((item, index) => (                
                        <>
                            <option value={item.currencyCode}> {item.currencyCode} </option>
                           
                        </> 
                      ))}
             
                  {/* <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option> */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              {/* Bank BIC        */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Reciver BIC
                </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="receiverBIC"
                      id="receiverBIC"
                      value={receiverBIC}
                      onChange={onReceiverBICChange}
                      onKeyDown={handleBankdata}
                  />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
                    {/* Bank NAME       */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Reciver BIC
                </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                        name="receiverBIC"
                        id="receiverBIC"
                        value={bankName}
                        readOnly
                  />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
              {/* Transfer Code Code */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Transfer Type
                </label>
                <div className="relative">
                        <select type="text"
                          name="transferTypeCode"
                          id="transferTypeCode"
                          value={transferTypeCode}
                          onChange={onTransferTypeCodeChange}
                          required
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
                  {transferList && transferList.map((item, index) => (                
                        <>
                            <option value={item.transferCode}> {item.transferCode} </option>
                           
                        </> 
                      ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                    </div>
                    
                    {/* Message Code */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Message Codes
                </label>
                <div className="relative">
                        <select type="text"
                          name="messageCode"
                          id="messageCode"
                          value={messageCode}
                          onChange={onMessageCodeChange}
                          required
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
                    {messageList && messageList.map((item, index) => (                
                        <>
                            <option value={item.messagecode}> {item.messagecode} </option>
                            {/* <option value="CORT">CORT</option>
                            <option value="HOLD">HOLD</option>
                            <option value="INTC">INTC</option>
                            <option value="PHOB">PHOB</option>
                            <option value="PHOI">PHOI</option>
                            <option value="PHON">PHON</option>
                            <option value="REPA">REPA</option>
                            <option value="SDVA">SDVA</option> */}
                        </> 
                    ))}
              </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            
                    
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Receiver Account Holder Number
                </label>
                      <input
                        type="text" name="recAccountNumber"
                        id="recAccountNumber"
                        value={recAccountNumber}
                        onChange={onRecAccountNumberChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      />
              </div>
            
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Receiver Account Holder Name 
                </label>
                      <input
                        name="recAccountName"
                        id="recAccountName"
                        value={recAccountName}
                        onChange={onRecAccountNameChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      />
              </div>
            </div>
                  
            <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Currency Amount
                      </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="number" name="currencyAmount"
                            required id="currencyAmount"
                            value={currencyAmount}
                            onChange={onCurrencyAmountChange}
                        />
                      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                          </div>
                          
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Transfer Fee
                      </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="number"
                            disabled name="transferFee"
                            id="transferFee" 
                            value={transferFee}
                            onChange={onCurrencyAmountChange}
                            readOnly
                        />
                      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                          </div>
                          
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        INR AMOUNT
                      </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            name="inrAmount" id="inrAmount" 
                            value={inrAmount}
                            onChange={onCurrencyAmountChange}
                            required
                        />
                      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    {/* BALANCE AVAIALBLE */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Remaining Balance
                      </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            name="available balance" id="availableBalance" 
                            value={availableBalance}
                            onChange={onCurrencyAmountChange}
                        required
                        readOnly
                        />
                      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                  </div>
                  
                  </div>
                  
                  <button onClick={SubmitHandler} type="button" className="w-full p-4 bg-indigo-600 text-white rounded shadow hover:bg-green-700">Make Payment</button>
                                    {modalOpen && <Response setOpenModal={setModalOpen} resp={resp} />}
        </form>
       
      </div>
      </div>
  )
}

export default Transfer;