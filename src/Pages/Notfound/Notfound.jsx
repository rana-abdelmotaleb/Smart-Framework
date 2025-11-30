import React from 'react'
import notfound from "./../../assets/E-Commerce-404-Page-Facebook.webp"
export default function Notfound() {
  return (
  <div className="h-[70vh] w-screen ">
      <img
        src={notfound}
        alt="Not Found"
        className="w-full h-full object-cover"
      />
    </div>

  )
}
