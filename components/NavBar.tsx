'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { logout } from "@/redux/authSlice"

const NavBar = () => {
  const dispatch = useDispatch();
  const token =useSelector((state:RootState) => state.auth.token);
  return (
    <nav className=" flex justify-between items-center p-3 bg-linear-to-bl bg-gray-100 shadow-lg ">
        <div className="text-[18px] font-bold">Blog App</div>
       {!token ? <Button className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer ">
            <Link href={`/auth/login`}>Log In</Link>
        </Button> : 
        <Button className="bg-red-600 hover:bg-red-700 cursor-pointer" onClick={() => dispatch(logout())}>
            Logout
        </Button>
        }
    </nav>
  )
}

export default NavBar
