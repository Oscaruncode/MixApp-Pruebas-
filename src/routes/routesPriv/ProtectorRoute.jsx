import { useAppContext } from "../../contextProvider/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectorRoute (){
    const appContext= useAppContext()
    return appContext.isAuthenticated?<Outlet/>: <Navigate to="/"/>
}