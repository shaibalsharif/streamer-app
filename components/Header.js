import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5
     justify-between items-center h-auto" >
     <div className="flex flex-grow justify-evenly
      max-w-2xl">
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
      <HeaderItem title="VARIFIED" Icon={BadgeCheckIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
      <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon} />
     </div>
        <Image className="object-contain"
        src="https://d2qcctj8epnr7y.cloudfront.net/images/2013/logo-Streaming1.png"
    
        height={100}
        width={200}
        />
    </header>
  )
}

export default Header