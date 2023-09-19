import { NavLink, SocialLinks } from "@/constants"
import { Logo } from "@/public"
import Image from "next/image"
import Link from "next/link"
import { Contact, Login } from "."


const Nav = () => {
  return (
<nav className="flex  items-center justify-between bg-slate-100  shadow-md h-24 margin-nav">
<div className=" border-r-2 h-full flex flex-row relative items-center justify-center space-x-2 p-10">
<Image src={Logo} alt="Urban Alpine" width={40} className="object-contain" />
<h3 className="font-bold lg:text-lg text-base">Swiss Alpine</h3>
</div>

<div className="justify-between flex flex-1 flex-row items-center">
<div className="flex-1 font-bold items-center gap-4 justify-center md:flex hidden">
{
  NavLink.map((item) =>(
    <Link key={item.name} href={item.href}>
      {item.name}
    </Link>
  ))
}
</div>
<div className="flex-1 font-bold items-center gap-4 justify-center lg:flex hidden">
  {
    SocialLinks.map((icons) =>(
      <Link key={icons.brand} href={icons.href}>
          <Image src={icons.name} alt="Swiss Alpine social accounts" width={23} />
      </Link>
    ))
  }
  </div>
</div>

<div className="md:border-l-2 border-0  h-full flex flex-row relative items-center justify-center space-x-2 p-10">
<div className="border-l-2  border-black"/>
<Contact />
<Login />
</div>

</nav>

  )
}

export default Nav


