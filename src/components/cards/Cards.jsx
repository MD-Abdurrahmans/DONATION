import { useNavigate } from "react-router-dom";



export default function Cards({info}) {
const navigate = useNavigate();
    const {id,image,title,price,category_name} = info || {} ;


    const handleAddCard =()=>{
  console.log('hi')
  navigate(`/cardDetails/${id}`)
    }

  return (
    <div   onClick={handleAddCard}   className={`
       
    relative flex flex-col rounded-xl
    shadow-md ${category_name === 'Clothing'? 'bg-[#79C23F26] text-[#79C23F]': ''}
    ${category_name === 'Education'? 'bg-[#FF444A26] text-[#FF444A]': ''}
    ${category_name === 'Food'? 'bg-[#F8714726] text-[#F87147]': ''}
    ${category_name === 'Health'? 'bg-[#0052FF26] text-[#0052FF]': ''}
    `}>



<div className="">
   <img
     src={image}
     className="h-56 w-full "
   />
 </div>
 <div className="p-4">
 <p className={`btn text-[14px] font-medium   inline p-2 rounded-lg 
 
 ${category_name === 'Clothing'? 'bg-[#79C23F33] text-[#79C23F]': ''}
    ${category_name === 'Education'? 'bg-[#FF444A33] text-[#FF444A]': ''}
    ${category_name === 'Food'? 'bg-[#F8714733] text-[#F87147]': ''}
    ${category_name === 'Health'? 'bg-[#0052FF33] text-[#0052FF]': ''}
 
 `}>
      {category_name}
     </p>
   <div className="mt-4 mb-2 flex items-center justify-between">
     <p className="block text-[20px] font-semibold">
      {title}
     </p>
     <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       ${price}
     </p>
   </div>
   <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
     With plenty of talk and listen time, voice-activated Siri access, and an
     available wireless charging case.
   </p>

 </div>





</div>
  )
}
