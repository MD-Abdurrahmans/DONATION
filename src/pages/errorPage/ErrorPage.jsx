import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
           <h1 className="text-center text-red-600 text-4xl">Page NotFound</h1>
           <br/>
           <Link to='/'><button className="btn bg-black text-white">Go Back</button></Link>
    </div>
  )
}
