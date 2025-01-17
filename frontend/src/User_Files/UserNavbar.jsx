import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { CgMenu } from 'react-icons/cg';
import { CgLogOut } from 'react-icons/cg';

import Logo from "../components/images/logo.png"

function UserNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const navigateDashBoard = (e, path) => {
        e.preventDefault();
        navigate(path);
    }

    const homePath = "/"

    const backHome = (path) => {
        localStorage.removeItem('userEmail');
        navigate(path);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavMenus = [
        { title: "Dashboard", path: "/user/dashboard" },  //Change navigation according to id number
        { title: "All Courses", path: "/user/allcourses" },
        { title: "My Profile", path: "/user/profile" },
        { title: "Contact", path: "/user/contact" }
    ];

    return (
        <header className="bg-black text-white pt-4 pb-2 select-none">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <div className="inline-block mr-2">
                        <img src={Logo} width="30" className="inline-block transform -translate-y-2" alt="Logo" />
                    </div>
                    <span
                        className="text-2xl sm:text-4xl font-mono inline-block mb-2">
                        Learn<span className="text-red-600">E</span>dge
                    </span>
                </div>

                <div className={`nav-links bg-black duration-500 md:static absolute md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        {NavMenus.map((Menu, index) => (
                            <li key={index} onClick={(e, path) => navigateDashBoard(e, Menu.path)} className="cursor-pointer hover:text-blue-600 ">
                                <span>{Menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    {/* Logout Button */}
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-1 px-2 rounded inline-flex items-center"
                        onClick={() => backHome(homePath)}>
                        <CgLogOut fontSize={20} />
                        <span className='pl-1'>Log Out</span>
                    </button>
                    {/* Small width Menu button */}
                    <span
                        onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden">
                        <CgMenu />
                    </span>
                </div>

            </nav>
        </header>
    );
}

export default UserNavbar;
