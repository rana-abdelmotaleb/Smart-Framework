import React, { useState } from 'react'
import first from "./../../assets/imgi_1_poert1.png"
import second from "./../../assets/imgi_2_port2.png"
import third from "./../../assets/imgi_3_port3.png"

export default function Portofolio() {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };
  return (
    <>
      <section className=" h-auto flex flex-col justify-center items-center pt-40">
        <h2 className="text-[#2c3e50] text-[40px] font-bold mb-4 uppercase">
          portfolio component
        </h2>
        <div className="relative flex items-center justify-center text-[#2c3e50] mb-5">
          <i className="fa-solid fa-star z-10 font-bold"></i>
          <span className="absolute left-10 w-20  border-3 border-[#2c3e50] top-1/2"></span>
          <span className="absolute right-10 w-20 border-3 border-[#2c3e50] top-1/2"></span>
        </div>
      </section>
    <section>
        <div className="container mx-auto  my-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[first, second, third, first, second, third].map((img, i) => (
              <div
                key={i}
                className=" rounded-lg overflow-hidden group p-3"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="rounded-lg transition-all duration-500 w-full"
                  />
                  <div
                    className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-70 transition-all duration-500 flex justify-center items-center cursor-pointer"
                    onClick={() => openImage(img)}
                  >
                    <i className="fa-solid fa-plus text-white text-8xl font-bold"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-[700px] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt=""
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}




