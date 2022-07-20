import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { useRouter } from "next/router"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"
import { useState } from "react"
const Header = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const handleClick = () => {
    router.push('/')
  }
  const handleSearch = (e) => {
  e.target.elements[0].value=""
    e.preventDefault();
    if (searchText.trim != "")
      router.push(`/?genre=fetchSearched&key=${searchText}`)
      searchText=""
     
  }

  return (
    <header className="flex flex-col sm:flex-row m-5
     justify-between items-center h-auto" >
      <div className="flex flex-grow justify-evenly
      max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VARIFIED" Icon={BadgeCheckIcon} />

        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <form className="flex" onSubmit={handleSearch}>
          <input type="text" placeholder="movie name..." onChange={(e) => setSearchText(e.target.value)} className='rounded-md w-50 h-8 p-2 border-solid border-2 border-white-50 cursor-pointer 
         bg-[#06202A] text-white-300  hover:ml-5  hover:mr-2 focus:w-200  transition duration-100
         transform hover:scale-125 hover:font-bold'/>
          <button type="submit">  <HeaderItem title="SEARCH" Icon={SearchIcon} /></button>

        </form>

        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain cursor-pointer"
        src="https://d2qcctj8epnr7y.cloudfront.net/images/2013/logo-Streaming1.png"
        onClick={handleClick}
        height={100}
        width={200}
      />
    </header>
  )
}

export default Header
