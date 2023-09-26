import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
             <div>
              <img className="bg-transparent bg-black"
               src="https://w7.pngwing.com/pngs/1018/1004/png-transparent-error-404-unavailable-web-page-file-not-found-illustration-thumbnail.png" alt="" />
             </div>
           <h1 className="text-center text-red-600 text-4xl">Page NotFound</h1>
           <br/>
           <Link to='/'><button className="btn bg-black text-white">Go Back</button></Link>
    </div>
  )
}
