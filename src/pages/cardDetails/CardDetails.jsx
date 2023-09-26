import { Link, useLoaderData, useParams } from "react-router-dom"



export default function CardDetails() {

  const  pId = useParams();
const infos = useLoaderData();

 const id = parseInt(pId.id)



  const matchInfo = infos.find(info =>  info.id === id)
 
 
  const handleAddToFavorites =()=>{

const addedFavorites =[];

    const getItem = JSON.parse(localStorage.getItem('favorites'));

 
     if(!getItem){
    
        addedFavorites.push(matchInfo);
        localStorage.setItem('favorites',JSON.stringify(addedFavorites))
     
      alert('no item was new added')

     }else{

     alert('old is there new will be add ') 
const fav = getItem.find(data=> data.id === id )

      if(!fav){
     addedFavorites.push(...getItem,matchInfo)
     localStorage.setItem('favorites',JSON.stringify(addedFavorites))
         alert('new item added')
      }else{

         alert('HAS same item')
      }
     
        
        

      //  addedFavorites.push(...addedFavorites,matchInfo)
  
       

          

     }
 

  }



  return (
 <div className="max-w-[1300px] mx-auto">
     <div className="flex justify-center items-center  ">
   <div className="relative flex flex-col w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      
      src={matchInfo.image}
      alt="image"
      className="h-[80vh] w-full object-cover"
    />

     <div className="absolute bg-black h-28  opacity-50 bottom-0 w-full ">
      
 
      </div>
      {/* donate button below */}


   <Link to='/donation' >
   <p 
      onClick={()=>handleAddToFavorites(matchInfo.id)}
      className={`btn text-[14px] font-medium   bg-opacity-100 opacity-100   border-0 inline-block absolute bottom-8  mt-8 pt-4 ml-6   rounded-lg 
 
 ${matchInfo.category_name === 'Clothing'? 'bg-[#79C23F] text-white': ''}
    ${matchInfo.category_name === 'Education'? 'bg-[#FF444A] text-white ': ''}
    ${matchInfo.category_name === 'Food'? 'bg-[#F87147] text-white': ''}
    ${matchInfo.category_name === 'Health'? 'bg-[#0052FF] text-white ': ''}
 
 `}>
  Donate ${matchInfo.price}
     </p>
   </Link>
  </div>
  <div className="p-6">
    {/* <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      startups
    </h6> */}
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
   { matchInfo.title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {matchInfo.description}
    </p>
   
  </div>
</div>
    </div>
 </div>
  )
}
