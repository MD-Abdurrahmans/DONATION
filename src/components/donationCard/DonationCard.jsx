import { useState } from "react";


export default function DonationCard({info}) {
 
    
    const {id,image,title,price,category_name} = info || {} ;


  
//


  return (
  
    <div   className={`
    relative flex  flex-row rounded-xl bg-clip-border text-gray-700
     shadow-md  

     ${category_name === 'Clothing'? 'bg-[#79C23F26] text-[#79C23F]': ''}
    ${category_name === 'Education'? 'bg-[#FF444A26] text-[#FF444A]': ''}
    ${category_name === 'Food'? 'bg-[#F8714726] text-[#F87147]': ''}
    ${category_name === 'Health'? 'bg-[#0052FF26] text-[#0052FF]': ''}
    `}>

  <div className=" mr-4 h-52 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-52 object-cover"
    />
  </div>

<div className="flex justify-center items-center" >
<div className="w-full  p-4 space-y-2  ">

<p className={`btn text-[14px] font-medium   inline p-2 rounded-lg 

${category_name === 'Clothing'? 'bg-[#79C23F33] text-[#79C23F]': ''}
   ${category_name === 'Education'? 'bg-[#FF444A33] text-[#FF444A]': ''}
   ${category_name === 'Food'? 'bg-[#F8714733] text-[#F87147]': ''}
   ${category_name === 'Health'? 'bg-[#0052FF33] text-[#0052FF]': ''}

`}>
     {category_name}
    </p>
    
<br/>

<p className="block text-2xl font-semibold">
     {title}
    </p>
    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      ${price}
    </p>

<p 
     
     className={` btn text-[14px] font-medium   bg-opacity-100 opacity-100   border-0      rounded-lg 

${category_name === 'Clothing'? 'bg-[#79C23F] text-white': ''}
   ${category_name === 'Education'? 'bg-[#FF444A] text-white ': ''}
   ${category_name === 'Food'? 'bg-[#F87147] text-white': ''}
   ${category_name === 'Health'? 'bg-[#0052FF] text-white ': ''}

`}>
  
  View Details
    </p>
  
</div>


</div>
 

</div>


  )
}
