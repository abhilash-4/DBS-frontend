[ !isEmp ?
    <div>

        <a href="profile" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Profile</a>

        <a href="transfer" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Transfer</a>
        <a href="transaction" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Transactions</a>
      
    </div>  
    :
    <div>
        <a href="/transfer" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Transfer</a>
        <a href="/dashboard" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Dashboard</a>   
        <a href="/transaction" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Transactions</a>
        <a href="/profile" className="py-2 px-3 font-bold bg-sky-50 hover:text-blue-400 text-indigo-600 rounded-lg">Profile</a>
       
    </div>
]
