import React from 'react'

function Home() {
  return (
    <div>
        
        <div className="text-black bg-sky-50 antialiased" style={{" ":"'Roboto', sans-serif"}}>
  <div className="py-60 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/dbs%2FmyHome.jpg?alt=media&token=787a5b0c-3da0-4d6a-a27c-7d2082c60ec7")'}}>
    <div className="container m-auto text-center px-6 opacity-100">
      {/* <h2 className="text-4xl font-bold mb-2 text-indigo-600">Welcome to best Pay</h2>
      <h3 className="text-2xl mb-8 text-black-200">Not much, but it could be a life form. This is Rouge Two. this is Rouge Two. Captain Solo, so you copy?</h3> */}
      {/* <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">Get started</button> */}
    </div>
  </div>
        <section className="container mx-auto px-6 p-10">
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-black font-bold mb-3">Banking Made Easy</h4>
              <p className="text-black mb-8 text-xl">Online banking allows a user to conduct financial transactions via the Internet. Online banking is also known as Internet banking or web banking.<br /><br />

Online banking offers customers almost every service traditionally available through a local branch including deposits, transfers, and online bill payments. Virtually every banking institution has some form of online banking, available both on desktop versions and through mobile apps.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/dbs%2F1.jpg?alt=media&token=514a15b7-97f2-4a36-be8b-b176e90eadf1" alt="Vortex" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-black font-bold mb-3">Online Transaction</h4>
              <p className="text-black mb-8 text-xl">Online banking allows a user to conduct financial transactions via the Internet.
              <br /><br />
              Consumers aren't required to visit a bank branch in order to complete most of their basic banking transactions.
              <br /><br />
              A customer needs a device, an Internet connection, and a bank card to register. Once registered, the consumer sets up a password to begin using the service.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/dbs%2F2.jpg?alt=media&token=e89a0b1b-631b-403c-8b30-6567c842144a" alt="Vortex" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-black font-bold mb-3">Security</h4>
              <p className="text-black mb-8 text-xl">All online sessions between you and the bank are protected by up to 128-bit encryption, which safeguards your information against disclosure to third parties.<br /><br />

High-risk transactions are also subject to a "Two-Factor authentication (2FA)" security check in order to verify the identity of the customer. When you undertake this type of transaction, we will send a One-Time-Pin (OTP) via SMS to your cell phone, and the transaction can only be completed once the OTP is entered during your online banking session.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/books-68839.appspot.com/o/dbs%2F3.jpg?alt=media&token=f7587fee-c0f9-421f-9491-eddb58337c1d" alt="Vortex" />
            </div>
          </div>
        </section>
      </div>
    </div>  
    
  )
}

export default Home;