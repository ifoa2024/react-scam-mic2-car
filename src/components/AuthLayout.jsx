import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AuthLayout(){
    return (
        <>
            <Navbar />
            <aside>Sono la barra laterale</aside>
            <Outlet />
        </>
    )
}