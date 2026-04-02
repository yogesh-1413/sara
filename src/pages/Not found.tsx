import React from "react";
import NavBar from "../componets/NavBar";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Not_found: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-1 flex flex-col items-center justify-center bg-[#2c23c2] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
                <h1 className=" sm:text-lg md:text-2xl lg:text-3xl dark:text-[#ffffff]">Opps!  Page Your are Looking for Doesn't Exist</h1>
                <p className="m-2 sm:text-sm md:text-md lg:text-lg">Navigate to Home </p>
                <Link to="/" title="Home">
                    <div className="rounded-md p-1 bg-blue-400 dark:bg-teal-300 hover:scale-110 transition-all duration-300 ease-in-out">
                        <Home className="h-10 w-10 m-2 hover:scale-90 transition-all duration-300 ease-in-out" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Not_found;