import React from 'react'
import logo from "./../../assets/imgi_1_avataaars.svg"

export default function Home() {
  return (
   <div className='bg-[#1ABC9C] h-auto flex flex-col justify-center items-center py-30'>
<img src={logo} alt="" className="w-48 mb-4 md:w-72 lg:w-96" />
      <h2 className='text-white text-[40px] text-center font-bold uppercase mb-6'>Start Framework</h2>
          <div className="relative flex items-center justify-center text-white mb-4">
                         
                          <i className="fa-solid fa-star z-10 font-bold"></i>

                        
                          <span className="absolute left-10 w-20  border-3 border-white top-1/2"></span>

                         
                          <span className="absolute right-10 w-20 border-3 border-white top-1/2"></span>
                        </div>


      <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
