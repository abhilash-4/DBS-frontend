
import authHeader from './authHeader';
import axios from "axios"

// const APIURL = "http://localhost:8080/api"

const APIURL = "https://payment-dbs.herokuapp.com/api"

//GET CUSTOMER DETAILS
const getMyDetails = () => {
    return axios.get(APIURL + "/getMyDetails", { headers: authHeader() })
    .then((response) => {
        return response.data;
     });
   
};


//GET ALL TRANSACTIONS
const getAllTrans = () => {
    return axios.get(APIURL + "/getAllTrans", { headers: authHeader() })
    .then((response) => {
        return response.data;
     });
}

//Get ALL MESSAGE CODES

const getAllMessageCodes = () => {

    return axios.get(APIURL + "/getAllMessageCodes", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}

//Get ALL Transfer CODES

const getAllTransferCodes = () => {

    return axios.get(APIURL + "/getAllTransferCodes", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}

//Get ALL Curremcy CODES

const getAllCurrencyCodes = () => {

    return axios.get(APIURL + "/getAllCurrencyCodes", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}



//GET CUSTOMER BY ID
const getCustomerDetails = (id) => {
    return axios.get(`${APIURL}/getCustomer/${id}`, { headers: authHeader()})
        .then((response) => {
            return response.data;
        });
}



//SAVING A TRANSACTION
const SaveTransaction = (data) => {

    return axios.post(`${APIURL}/transact`, data, { headers: authHeader() }).then(
        (res) => {
            return res;
        }
    )
} 

//GET BANK BY BIC
const getBankDetails = (bic) => {
    return axios.get(`${APIURL}/getBank/${bic}`, { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}

//GET MESSAGE CODE COUNT

const getMessageCount = () => {
    return axios.get(APIURL + "/getMessageCount", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}

//GET TRANSFER TYPE CODE COUNT

const getTransferCount = () => {
    return axios.get(APIURL + "/getTransferCount", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}

//GET TOP CUSTOMERS

const getTopCustomers = () => {
    return axios.get(APIURL + "/getTopCustomers", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}


//Get TOP BANKS

//GET TOP CUSTOMERS

const getTopBanks = () => {
    return axios.get(APIURL + "/getTopBanks", { headers: authHeader() })
    .then((response) => {
        return response.data;
    });
}








const UserService = {
    getMyDetails,
    getCustomerDetails,
    getBankDetails,
    SaveTransaction,
    getAllTrans,
    getMessageCount,
    getTransferCount,
    getTopCustomers,
    getTopBanks,
    getAllMessageCodes,
    getAllCurrencyCodes,
    getAllTransferCodes,
}
  
export default UserService;

// class UserService { 
//     getMyDetails(){
//        return axios.get("http://localhost:8080/api/getMyDetails", { headers: authHeader() });
   
//     };
// }

// export default new UserService();