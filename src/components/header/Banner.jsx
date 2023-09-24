
export default function Banner() {
  return (
    <div className="min-h-screen">
      
        <div className="bg-white  relative "  >
           
            <img className="opacity-10 w-full h-[80vh]"  src='../../../public/Rectangle 4281.png ' alt="" />
       
         <h1 className="md:text-4xl lg:text-5xl font-bold left-[23%]  absolute bottom-[50%]  z-40  opacity-100 ">I Grow By Helping People In Need</h1>
        </div>
        <br/>

        <div className="form-control left-[30%] w-[40%]   absolute bottom-[30%]  z-40  opacity-100">
      {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
      <div className="flex items-center mt-2">
      
        <input type="text" placeholder="Search here..." className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

        <p className="py-2.5 px-3 text-gray-500 bg-[#FF444A]   text-white dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">Search</p>
    </div>
    </div>
    </div>
  )
}
