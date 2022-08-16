import React, { useEffect, useState } from 'react'
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import UserService from '../services/UserService';
import { Chart } from "react-google-charts";



const options = {
  
  pieHole: 0.4,
  is3D: true,
  backgroundColor: '#f0f9ff',
  chartArea: {'width': '90%', 'height': '80%'},
  legend: {'position': 'top'}
};


function Dashboard() {





  const [messageCount, setMessageCount] = useState([]);
  const [transferCount, setTransferCount] = useState([]);
  const [topCustomers, setTopCustomers] = useState([]);
  const [topBanks, setTopBanks] = useState([]);


  useEffect(() => {
    
      UserService.getMessageCount().then((res => {
        const Mdata = [["Message codes", "No of Tranasactions"],];
        const arr3 = Mdata.concat(res);
        setMessageCount(arr3);
        console.log(arr3);
 
    
      }));


       ///fetch transfer type code details
      UserService.getTransferCount().then((res => {
        console.log(res);
        const Tdata = [["Transfer codes", "No of Tranasactions"],];
        const arr3 = Tdata.concat(res);
        setTransferCount(arr3);
        
        
      }));

      ///fetch top custoemrs
      UserService.getTopCustomers().then((res => {

        // const Cdata = [["Top 5 Customers", "Highest Remittance"],];
        // const arr3 = Cdata.concat(res);
        setTopCustomers(res);
        
        
      }));

      //fetch Top banks
      UserService.getTopBanks().then((res => {

        // const Cdata = [["Top 5 Customers", "Highest Remittance"],];
        // const arr3 = Cdata.concat(res);
        setTopBanks(res);
        console.log(res);
        
      }));
  


    
  }, [])



  return (

      <div>
          <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-1 lg:grid-cols-2">
          
        <div className="flex justify-center p-2 rounded-xl">
            <div className='justify-center'>
            <h1 className="text-2xl font-extrabold text-center text-indigo-600"> Message Codes  </h1>
            </div>
    
                
            <div className='p-2'>
            
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={messageCount}
                options={options}
               
            />
              </div>
          </div>


          <div className="flex justify-center p-2  rounded-xl">
            <div className='justify-center'>
            <h1 className="text-xl font-extrabold mb-12 text-center text-indigo-600"> Transfer Type Codes  </h1>
            </div>
    
                
            <div className='p-2'>
            
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={transferCount}
                options={options}
               
            />
              </div>
          </div>

        
          {/* <div className="flex justify-center p-2 border-2 border-indigo-300 rounded-xl">
            <div className='justify-center'>
            <h1 className="text-xl font-extrabold mb-12 text-center text-indigo-600"> Transfer Type Codes  </h1>
            </div>
    
                
            <div className='p-2'>
            
            <Chart
                chartType="BarChart"
                data={topCustomers}
                width="100%"
                height="400"
                options={Coptions}
               
            />
              </div>
          </div> */}

          
          
        
          
        </div>
        
        <div className="flex justify-center p-8 rounded-xl">
          <div>    
                  <h1 className="text-2xl font-extrabold text-center  mb-12 text-indigo-600"> Top Customers </h1>
                  <BarChart
                    width={1000}
                    height={300}
                    data={topCustomers}
                    margin={{
                      top: 15,
                      right: 80,
                      left: 80,
                      bottom: 5,
                    }}
                    barSize={30}
                  >
                    <XAxis
                      dataKey="customer_id"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="total" fill="#4f46e5" background={{ fill: "#eee" }} />
                  </BarChart>
                </div>
            
        </div>
        
        <div className="flex justify-center p-6 rounded-xl">
          <div>    
                  <h1 className="text-2xl font-extrabold text-center  mb-12 text-indigo-600"> Top Banks </h1>
                  <BarChart
                    width={1000}
                    height={300}
                    data={topBanks}
                    margin={{
                      top: 15,
                      right: 80,
                      left: 80,
                      bottom: 5,
                    }}
                    barSize={30}
                  >
                    <XAxis
                      dataKey="receiver_bic"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="total" fill="#4f46e5" />
                  </BarChart>
                </div>
            
          </div>
  </div>
      </div>
    
  );
};
export default Dashboard;