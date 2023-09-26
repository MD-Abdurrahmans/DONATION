
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
    
    <div className='max-w-[1300px] mx-auto '>
           
    
    <div className='overflow-hidden'>

 <div className='flex mx-auto  justify-center items-center'>
  
 <Chart
 
               type='pie'
               width={500}
               
               height={550}
               series={[donationTotal,donateds, ]}

               options={{
                labels:['Total','Donation','bg'],
                title:{text:'donation'},
                noData:{text:'empty data'},
              
               }}

               
              >
                </Chart> 
 </div>

    </div>

  

    </div>
  )
}
