import { IAuthState } from "@/types/authType";
import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState:IAuthState = {
    token:Cookies.get("token"),
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!):null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state) => {
            state.token=null;
            state.user=null;
            Cookies.remove("token");
            localStorage.removeItem("user");
        },
        setAuth: (state,action) => {
            state.token=action.payload.token;
            state.user=action.payload.user;
            Cookies.set("token",action.payload.token,{expires:1});
            localStorage.setItem("user",JSON.stringify(action.payload.user));
        }
    }
})

export const {logout,setAuth} = authSlice.actions

export default authSlice.reducer