
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/Banner";
import ParentCard from "../../components/parentCard/ParentCard";
import { useEffect, useState } from "react";


export default function HomePage() {
const [store,setStore] = useState([]);
  const [search,setSearch] = useState();
    const infos = useLoaderData();
 const raj =  infos.filter(info=>info.category_name.toLowerCase() === search)


  

  return (
    <div>
       
        <Banner setSearch={setSearch} ></Banner>
 
      {
          <ParentCard  infos={search?raj:infos} search={search}></ParentCard>
      }
           

    </div>
  )
}
