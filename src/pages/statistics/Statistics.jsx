import { PieChart } from 'react-minimal-pie-chart';
import { useLoaderData } from 'react-router-dom';

import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';

export default function Statistics() {
const [donateds,setDonated] = useState(0)

    const favorites=  JSON.parse(localStorage.getItem('favorites'));
  const donationsData= useLoaderData();
//   const allDonation =donationsData.length;

  console.log('allis',favorites.length)

//  const hi= 44;

const  donationTotal = donationsData.length;   //100%
const donate = favorites.length;  //100% - (donate + donate)

 useEffect(()=>{

     if(favorites){
       setDonated(donateds + donate)
     }
 },[])


 console.log('totaldonated',donateds)
const current = (donateds - donationTotal);


   
console.log('ccc',current)



  return (
    
    <div>
            <h1>statistics</h1>
    
    <div className='w-[400px]'>

              <Chart
               type='pie'
               width={1349}
               height={550}
               series={[donationTotal,donateds, ]}

               options={{
                labels:['Donation','Total','bg'],
                title:{text:'donation'},
                noData:{text:'empty data'}
               }}

               
              >
                </Chart> 

    </div>

  

    </div>
  )
}
