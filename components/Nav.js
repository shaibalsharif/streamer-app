import React from 'react'
import requests from '../utils/requests'
import {  useRouter } from 'next/router'
import { useState } from 'react'
const Nav = () => {
  const router = useRouter()
  const [clicked, setClicked] = useState("");
  return (
    
    <nav className='relative'>
      <div className='h-9 flex px-10 sm:px-20 text-2xl whitespace-nowrap
    space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => {
          
          if(!(title=='SEARCH')){
            return (
          <h2 key={key}
            onClick={(e) => {
              router.push(`/?genre=${key}`)
              let allCats = document.getElementsByClassName('categories')

              for (let index = 0; index < allCats.length; index++) {
                const element = allCats[index];
                element.classList.remove('text-red-500')
                element.classList.remove('scale-125')
              }

              e.target.classList.add('text-red-500')
              e.target.classList.add('scale-125')
            }}
            className='categories last:pr-24 cursor-pointer transition duration-100
        transform hover:scale-125 hover:text-white active:text-red-500'>  {title}</h2>
        )
          }
          
          })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
    </nav>
  )
}

export default Nav;