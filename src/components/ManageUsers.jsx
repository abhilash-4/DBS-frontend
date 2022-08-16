// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function ManageUsers() {

//     const navigate = useNavigate();

    

//     return (
//         <div className="overflow-x-auto relative rounded-lg px-20 py-20">
//         <div className="text-center font-bold text-2xl">
//             CUSTOMER DETAILS
//         </div>
//         <br></br>
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                     <th scope="col" className="py-3 px-6 bg-gray-500/40">
//                         CustomerID
//                     </th>
//                     <th scope="col" className="py-3 px-6 bg-gray-500/40">
//                         Name
//                     </th>
//                     <th scope="col" className="py-3 px-6 bg-gray-500/40">
//                         Details
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                     <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         123456
//                     </th>
//                     <td className="py-4 px-6">
//                         Sriram
//                     </td>
//                     <td className="py-4 px-6">
//                         <button onClick={()=>{navigate('/customer')}} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
//                             <span>Open</span>
//                         </button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default ManageUsers;