import { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import DonationCard from "../../components/donationCard/DonationCard";


export default function Donation() {
    const [showAllBtn,setShowAllBtn] = useState(false);
    const [isShow,setIsShow] = useState(false);
    const favorites=  JSON.parse(localStorage.getItem('favorites'));
   useEffect(()=>{

       if(favorites){

        const total=   favorites.reduce((current,prev)=>current+ prev.price ,0)

         if(favorites.length>4){
            setShowAllBtn(true)
         }else{
            setShowAllBtn(false)
         }
          
       }
   },[])




  return (

   <div>
        <div className="flex  min-h-screen  justify-center items-center">
    
    <div className=" grid grid-cols-1 md:grid-cols-2  gap-5">
     
      {
          !isShow? favorites?.slice(0,4).map(info=> <DonationCard  key={info.id}  info={info}  ></DonationCard> )
          :    favorites?.map(info=> <DonationCard  key={info.id}  info={info}  ></DonationCard> )
      }
       
    </div>

  </div>

 
 {showAllBtn? <div    className="flex justify-center  mt-5 mb-5">
    <button onClick={()=> setIsShow(!isShow)} className="btn bg-green-600 text-white"> { isShow? 'See Less':'See All' }</button>
    </div>:''}

  

   </div>
  )
}
