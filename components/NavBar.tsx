import Link from "next/link"
import { Button } from "./ui/button"

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center p-3 bg-linear-to-bl bg-gray-100 shadow-lg ">
        <div className="text-[18px]">Dashboard</div>
        <Button className="bg-orange-600 hover:bg-orange-700 cursor-pointer ">
            <Link href={`/auth/login`}>Log In</Link>
        </Button>
    </nav>
  )
}

export default NavBar
