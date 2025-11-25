'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { logout, setAuth } from "@/redux/authSlice"
import { useEffect } from "react"
import Cookies from "js-cookie"

function safeParse(value: string | null) {
  if (!value) return null;
  if (value === "undefined") return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const NavBar = () => {
  const dispatch = useDispatch();
  const token =useSelector((state:RootState) => state.auth.token);
  const user = useSelector((state:RootState) => state.auth.user);
  console.log(user);
  
   useEffect(() => {
    // Load stored token + user on client
    const storedToken = Cookies.get("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      dispatch(setAuth({
        token: storedToken,
        user: safeParse(storedUser)
      }));
    }
  }, [dispatch]);
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
