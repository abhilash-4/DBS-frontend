import React from 'react'

function Modal({setOpenModal}) {
  return (
    <div>



        <div>
        <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50">
           <div className="bg-slate-200 rounded p-4 m-8 max-w-xs max-h-full text-center overflow-y-auto">
                   <div className="mb-4">
                       <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Reset Password</h1>
                   </div>
                   <div className="mb-8">
                       <p>Enter your email to reset password you will be redirected to a reset page</p>
                   </div>
                   
                     
                   
                   <div className="flex justify-between gap-4">
                    
                  
                 
                   
                   <button  onClick={() => {
                    setOpenModal(false);
                        }}
                        type='button'
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel</button>
                   </div>
                   
               </div>
           </div>
     </div>



        
           
           
        </div>
  )
}

export default Modal