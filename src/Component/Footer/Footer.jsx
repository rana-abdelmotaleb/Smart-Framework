import React from 'react'

export default function Footer() {
  return (
  
  
    <footer className="relative bottom-0 w-full">
  <div className="upperFooter bg-[#2C3E50] text-white p-[40px]">
    
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row">
        
        {/* first */}
        <div className='w-full md:w-1/3'>
          <div className="inner text-center">
            <h3 className='font-medium text-[28px] mb-3'>LOCATION</h3>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>

        {/* second */}
        <div className="w-full md:w-1/3">
          <div className="inner text-center">
            <h3 className="font-medium text-[28px] mb-3">AROUND THE WEB</h3>

            <div className="flex justify-center flex-wrap">
              <div className="m-2 flex size-[40px] items-center justify-center rounded-full border border-white">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="m-2 flex size-[40px] items-center justify-center rounded-full border border-white">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="m-2 flex size-[40px] items-center justify-center rounded-full border border-white">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="m-2 flex size-[40px] items-center justify-center rounded-full border border-white">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
        </div>

        {/* third */}
        <div className='w-full md:w-1/3'>
          <div className="inner text-center">
            <h3 className='font-medium text-[28px] mb-3'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="lowerFooter bg-[#1A252F] text-[#f0f8ff] p-[40px] text-center">
    Copyright © Your Website 2021
  </div>
</footer>

  
  )
}
