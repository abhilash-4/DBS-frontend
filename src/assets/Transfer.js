import '../App.css'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Customer from "./Customer"
import Receiver from "./Receiver"


function Transfer(props){
    const [customerid, setCustomerId] = useState("");
    const [custIdNotFound,setCustIdNotFound] = useState(null)
    const [custDetails,setCustDetails] = useState({})
    const [bic,setBic] = useState("")
    const [receiverDetails,setReceiverDetails] = useState({})
    const [receiverNotFound,setReceiverNotFound] = useState(null)
    const[transfertypecode,setTransferTypeCode]=useState("")
    const[messagecode,setMessageCode]=useState("")
    const [currencyamount,setCurrencyAmount] = useState("");
    const [transferfee,setTransferFee] = useState("");
    const [inramount, setInrAmount] = useState("");
    const [clearbalance,setClearBalance]=useState("")
    const[currencycode,setCurrencyCode]=useState("")
    const [amountToBeTransfered,setAmountToBeTransfered] = useState("")
    const [afterTransferClearBalance,setAfterTransferClearBalance] = useState(0)
    const [amountExceedingErr,setAmountExceedingErr] = useState("")


    useEffect(()=>{
        if(customerid.length===14){
            axios.get(`http://localhost:8080/api/customers/${customerid}`)
            .then((res) => { 
                console.log(res);
                setCustDetails(res.data)
                setCustIdNotFound(null)
            })
            .catch(err=>{
                setCustIdNotFound("Customer ID Not Found ")
            })
        }
        else{
            if( customerid.length > 0){
            setCustIdNotFound("Please enter Valid Customer ID")
            }
            setCustDetails({})
        }
    },[customerid])
   
    const handleCustomerId = (event) => {
        event.preventDefault()
        setCustomerId(event.target.value)
    }


    
    useEffect( () => {
        const lengthOfBic = bic.length
        if( lengthOfBic === 11){
            axios.get(`http://localhost:8080/api/banks/${bic}`)
            .then((res) => { 
                setReceiverDetails(res.data) 
                setReceiverNotFound(null)
            })
            .catch(err => { 
                setReceiverDetails({})
                setReceiverNotFound("Receiver BIC Not Found ")
            })
        }
        else{
            if( lengthOfBic > 0){
            setReceiverNotFound("Please enter valid BIC")
            }
            setReceiverDetails({})
        }
    },[bic])

    const handleWithreceiver = (event) => {
        event.preventDefault()
        setBic(event.target.value)
    }

    const handleTransferTypeCode = (e) =>{
        setTransferTypeCode( e.target.value);
    }
    const handleMessageCode = (e) =>{
        setMessageCode( e.target.value);
    }

    useEffect(()=>{
        if( props.overdraft === "yes"){
            setTransferFee((amountToBeTransfered*0.25)/100)
            setAfterTransferClearBalance( parseFloat(props.clearbalance)-(parseFloat(amountToBeTransfered)+parseFloat(transferfee)).toString())
        }
        else{
            if( amountToBeTransfered > props.clearbalance){
                setAmountExceedingErr("cannot send")
           
            }
            else{
                setTransferFee((amountToBeTransfered*0.25)/100)
                setAfterTransferClearBalance( parseFloat(props.clearbalance)-(parseFloat(amountToBeTransfered)+parseFloat(transferfee)))
                setAmountExceedingErr("")
            }
        }        
    },[amountToBeTransfered])

  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            customerid:customerid,
            // clearbalance:props.clearbalance,
            // currencycode:props.currencycode,
            // accountholdername:props.accountholdername,
            bic:bic,
            // bankname:props.bankname,
            transferfee:transferfee,
            messagecode:messagecode,
        

        }
        axios.post("http://localhost:8080/api/transactions",data)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return(
        <div style={{margin:"20px"}}>
            <div>
                <label>Customer Id</label>
                <input type="number" id="customerid" name="customerid" value={customerid} onChange={handleCustomerId}
                 /><br/>
                 { custIdNotFound && <p>{custIdNotFound}</p>}
                 <Customer custDetails ={custDetails}/>
            </div>

            <div>
                <label>BIC</label>
                <input type="text" placeholder="BIC"
                    value={bic} 
                    onChange={handleWithreceiver} /><br/>
                    { receiverNotFound && <p>{receiverNotFound}</p>}
                <Receiver receiverDetails ={receiverDetails}/>
            </div>

            <div>
                <label>Transfer Type</label>
                <select type="text" name="transfertypecode" id="transfertypecode" value={transfertypecode} onChange={handleTransferTypeCode} required>
                    <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
                    <option value="CT">Customer Transfer</option>
                    <option value="BT">Bank Transfer</option>
                </select><br/>
                <label>Message Code</label>
                <select type="text" name="messagecode" id="messagecode" value={messagecode} onChange={handleMessageCode} required>
                        <option value="" defaultValue="Select an Option" disabled hidden>Select an Option</option>
                        <option value="CHQB">CHQB</option>
                        <option value="CORT">CORT</option>
                        <option value="HOLD">HOLD</option>
                        <option value="INTC">INTC</option>
                        <option value="PHOB">PHOB</option>
                        <option value="PHOI">PHOI</option>
                        <option value="PHON">PHON</option>
                        <option value="REPA">REPA</option>
                        <option value="SDVA">SDVA</option>
                </select><br/>
                <label>Amount : </label>
                <input type="text" value={amountToBeTransfered} onChange={event => setAmountToBeTransfered(event.target.value)}/><br/>
                <p>{amountExceedingErr}</p>
                <p>{transferfee}</p>
                <label>Transfer Fee : </label>
                <input type="text" value={transferfee}  /><br/>
                <label>Clear Balance : </label>
                <input type="text" value={afterTransferClearBalance} />
                <br/>
            </div>
            <div>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
        </div>
    )

}
export default Transfer;
