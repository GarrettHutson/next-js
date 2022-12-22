import Link from "next/link"
import Image from "next/image"

export default function Header(){
   return (
    <header  >
    <nav className="h-72 bg-gradient-to-r from-white to-green-100 w-screen flex p-8">
    <div className="flex flex-col self-stretch">
    <h1 className="text-4xl mb-14  ml-4">AR</h1> 
    <h2 className="text-2xl">SED UT PERSPICIATIS UNDE OMNIS</h2>

    </div>
   
<div className="ml-auto flex gap-6 font-bold">
<Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="about">About-us</Link>
</div>
     
    </nav>
  </header>
   )
 
}