import { useLoaderData } from "react-router-dom"
import Cards from "../../components/cards/Cards";


export default function Home() {


  const cards = useLoaderData();




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {
          cards?.map(card=> <Cards key={card.id} card={card}></Cards>)
         }
    </div>
  )
}
