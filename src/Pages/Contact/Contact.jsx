import React from "react";

export default function Contact() {
  return (
    <div className="h-auto flex flex-col justify-center items-center px-4 pt-35 pb-10 ">
     <h2 className='text-[#2c3e50] text-[40px] font-bold mb-4 uppercase text-center'>conatct section</h2>
       <div className="relative flex items-center justify-center text-[#2c3e50] mb-5">
                         
                          <i className="fa-solid fa-star z-10 font-bold"></i>

                        
                          <span className="absolute left-10 w-20  border-3 border-[#2c3e50] top-1/2"></span>

                         
                          <span className="absolute right-10 w-20 border-3 border-[#2c3e50] top-1/2"></span>
                        </div>

      <form className="w-full md:w-2/4  ">
        
        {/* User Name */}
        <div className="relative z-0 my-7">
          <input
            type="text"
            id="user_name"
            className="peer block py-4 px-0 w-full text-sm text-[#495057] bg-transparent 
                       border-0 border-b-2 border-gray-200 appearance-none 
                       focus:outline-none focus:ring-0  cursor-text"
            placeholder=" " 
            required
          />
          <label
            htmlFor="user_name"
            className="absolute text-md text-[#495057] duration-300 transform 
                       -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                       peer-focus:start-0 peer-focus:text-green-400 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                       peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            UserName
          </label>
        </div>

        {/* Age */}
      <div className="relative z-0 ">
  <input
    type="number"
    id="age"
    className="peer block py-4 px-0 w-full text-sm text-[#495057] bg-transparent 
                       border-0 border-b-2 border-gray-200 appearance-none 
                       focus:outline-none focus:ring-0 focus:border-gray-400 cursor-text"
    placeholder=" "
    required
  />
  <label
    htmlFor="age"
     className="absolute text-md text-[#495057] duration-300 transform 
                       -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                       peer-focus:start-0 peer-focus:text-green-400 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                       peer-focus:scale-75 peer-focus:-translate-y-6"
          >
    UserAge
  </label>
</div>


        {/* Email */}
        <div className="relative z-0 my-7">
          <input
            type="email"
            id="email"
           className="peer block py-4 px-0 w-full text-sm text-[#495057] bg-transparent 
                       border-0 border-b-2 border-gray-200 appearance-none 
                       focus:outline-none focus:ring-0 focus:border-gray-400 cursor-text"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
             className="absolute text-md text-[#495057] duration-300 transform 
                       -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                       peer-focus:start-0 peer-focus:text-green-400 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                       peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            UserEmail 
          </label>
        </div>

        {/* Password */}
        <div className="relative z-0 mb-6">
          <input
            type="password"
            id="password"
             className="peer block py-4 px-0 w-full text-sm text-[#495057] bg-transparent 
                       border-0 border-b-2 border-gray-200 appearance-none 
                       focus:outline-none focus:ring-0 focus:border-gray-400 cursor-text"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
           className="absolute text-md text-[#495057] duration-300 transform 
                       -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                       peer-focus:start-0 peer-focus:text-green-400 
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                       peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            UserPassword
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-[#1ABC9C]  text-white font-medium py-2 px-5 rounded transition-colors cursor-pointer"
        >
         Send Message
        </button>
      </form>
    </div>
  );
}
