import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footers";
import Navbar from "../../components/header/Navbar";


export default function Root() {
  return (
    <div>
            <Navbar></Navbar>
            
          <div className="min-h-screen max-w-[1300px] mx-auto mb-[50px]">
            <Outlet></Outlet>
          </div>
             <Footer></Footer>
    </div>
  )
}
