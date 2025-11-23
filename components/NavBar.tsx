import Link from "next/link"
import { Button } from "./ui/button"

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center p-3 bg-linear-to-bl bg-gray-100 shadow-lg ">
        <div className="text-[18px] font-bold">Blog App</div>
        <Button className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer ">
            <Link href={`/auth/login`}>Log In</Link>
        </Button>
    </nav>
  )
}

export default NavBar
