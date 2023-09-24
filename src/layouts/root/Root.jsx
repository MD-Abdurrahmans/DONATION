import { Outlet } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footers/Footers";


export default function Root() {
  return (
    <div>
          <Navbar></Navbar>
           
          <div className="min-h-screen max-w-[1300px] mx-auto mb-20">
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
    </div>
  )
}
