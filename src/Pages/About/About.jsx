import React from 'react'

export default function About() {
  return (
    <section className='bg-[#1ABC9C] h-[98vh] flex flex-col justify-center items-center pt-30'>
     <h2 className='text-white text-[40px] text-center font-bold mb-4 uppercase'>about component</h2>
    
       <div className="relative flex items-center justify-center text-white mb-5">
                         
                          <i className="fa-solid fa-star z-10 font-bold"></i>

                        
                          <span className="absolute left-10 w-20  border-3 border-white top-1/2"></span>

                         
                          <span className="absolute right-10 w-20 border-3 border-white top-1/2"></span>
                        </div>
                        <div className='container px-6 mx-auto text-white'>
                          <div className='md:flex'>
                            <div className='md:w-1/2'>
                            <div className="inner px-6 pb-10">
                              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            </div>
                            <div className='md:w-1/2'>
                            <div className="inner px-6">
                              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            </div>
                          </div>
                        </div>
    </section>
  )
}
