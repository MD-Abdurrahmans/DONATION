import Cards from "../cards/Cards";


export default function ParentCard({infos}) {

    
  // console.log('prevsearch',search)
  console.log(infos)

  return (
    <div>
        
        {/* info.category_name.toLowerCase() */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {
      

     }

       {
            infos?.map(info=> <Cards key={info.id} info={info} ></Cards> )
        }
       </div>
    </div>
  )
}
