'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
    LogoIcon, DashboardIcon, SalesIcon, DebtsIcon, StocksIcon, ServicesIcon,
    ExpensesIcon, ReportsIcon, HistoryIcon, SettingsIcon
} from "@/components/icons";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from '../basics';

export default function SideBarWidget() {

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const Links = [
        {
            id: 1, name: "Dashboard",
            icon: <DashboardIcon className='size-5 fill-current' />,
            link: '/dashboard'
        },
        {
            id: 2, name: "Sales",
            icon: <SalesIcon className='size-5 fill-current' />,
            link: '/sales'
        },
        {
            id: 3, name: "Debts",
            icon: <DebtsIcon className='size-5 fill-current' />,
            link: '/debts'
        },
        {
            id: 4, name: "Stocks",
            icon: <StocksIcon className='size-5 fill-current' />,
            link: '/stocks'
        },
        {
            id: 5, name: "Services",
            icon: <ServicesIcon className='size-5 fill-current' />,
            link: '/services'
        },

        {
            id: 6, name: "Expenses",
            icon: <ExpensesIcon className='size-5 fill-current' />,
            link: '/expenses'
        },


        {
            id: 7, name: "Reports",
            icon: <ReportsIcon className='size-5 fill-current' />,
            link: '/reports'
        },

        {
            id: 8, name: "Histories",
            icon: <HistoryIcon className='size-5 fill-current' />,
            link: '/history'
        },

        {
            id: 9, name: "Settings",
            icon: <SettingsIcon className='size-5 fill-current' type='filled' />,
            link: '/settings'
        },



    ];


    return (
        < div className={`fixed flex h-screen ${isExpanded ? "w-48" : "w-20"} hidden lg:block transition-width duration-300 bg-akauntme`
        }>
            <div className="flex flex-col justify-between h-full p-4">
                <div>
                    <div className='border-b border-white/20 shadow-sm py-3'>

                        <h1 className={`text-white flex items-center gap-x-2 font-bold text-xl ${isExpanded ? "block" : "hidden"} text-center`}>
                            <LogoIcon type="alone" className="size-6 fill-white" /> Akauntme

                        </h1>
                        <h1 className={`text-white font-bold text-xl ${isExpanded ? "hidden" : "block"} text-center flex justify-center`}>
                            <LogoIcon type="alone" className="size-6 fill-white" />
                        </h1>
                    </div>


                    <ul className="mt-10 space-y-4 flex flex-col h-[70vh] justify-between">
                        {
                            Links.map((e, index) => {
                                return (
                                    <motion.li className="text-white text-lg " key={index}
                                        whileHover={{
                                            scale: 0.95,
                                        }}
                                        whileTap={{
                                            scale: 1
                                        }}
                                    >
                                        <Link href={e.link} className={`flex items-center gap-x-2  ${isExpanded ? "" : "justify-center"} *:hover:bg-white *:hover:text-akauntme `}>
                                            <div className='bg-transparent hover:bg-white rounded-md text-white hover:text-akauntme p-1'>{e.icon}</div>
                                            <div className={` ${isExpanded ? "block" : "hidden"} text-sm font-semibold p-1 rounded-md`}>
                                                {e.name}
                                            </div>
                                        </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="text-white self-end bg-gray-700 p-2 rounded-full 
                focus:outline-none absolute -right-3"
                >
                    {isExpanded ?

                        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M21.470703 8.9863281 A 1.50015 1.50015 0 0 0 20.439453 9.4394531L6.4394531 23.439453 A 1.50015 1.50015 0 0 0 6.4394531 25.560547L20.439453 39.560547 A 1.50015 1.50015 0 1 0 22.560547 37.439453L11.121094 26L40.5 26 A 1.50015 1.50015 0 1 0 40.5 23L11.121094 23L22.560547 11.560547 A 1.50015 1.50015 0 0 0 21.470703 8.9863281 z" fill="#ECE8E8" />
                        </svg>
                        :

                        <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M26.484375 8.984375 A 1.50015 1.50015 0 0 0 25.439453 11.560547L36.878906 23L7.5 23 A 1.50015 1.50015 0 1 0 7.5 26L36.878906 26L25.439453 37.439453 A 1.50015 1.50015 0 1 0 27.560547 39.560547L41.560547 25.560547 A 1.50015 1.50015 0 0 0 41.560547 23.439453L27.560547 9.4394531 A 1.50015 1.50015 0 0 0 26.484375 8.984375 z" fill="#ECE8E8" />
                        </svg>
                    }
                </button>
            </div>
        </div >
    )

}
