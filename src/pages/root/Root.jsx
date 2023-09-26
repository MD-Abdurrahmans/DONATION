import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footers";
import Navbar from "../../components/header/Navbar";


export default function Root() {

  const loc = useLocation();

    console.log(loc.pathname)
    document.title = loc.pathname.replace('/','Donation/');


  return (
    <div>
            <Navbar></Navbar>
            
          <div className="min-h-screen max-w-[1300px] mx-auto mb-[50px] mx-4  ">
            <Outlet></Outlet>
          </div>
             <Footer></Footer>
    </div>
  )
}
