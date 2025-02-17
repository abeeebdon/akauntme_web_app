'use client'
import React from 'react'
import {
    LogoIcon, DashboardIcon, SalesIcon, DebtsIcon, StocksIcon, ServicesIcon,
    ExpensesIcon, ReportsIcon, HistoryIcon, SettingsIcon, ReceiptIcon, MarketplaceIcon
} from "@/components/icons";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function FooterNavbarWidget() {
    const pathname = usePathname();

    return (

        <footer className="flex lg:hidden items-center fixed bottom-0 w-full leading-10">
            <div className="flex justify-around  items-center w-full mx-2 bg-white rounded-tl-[1.8rem] rounded-tr-[1.8rem] shadow-lg border p-2">
                <Link href="/dashboard" className={`flex flex-col mb-2 items-center relative 
                    ${pathname === "/dashboard" ? 'text-akauntme' : 'text-gray-700'}
                    `}>
                    <DashboardIcon className='size-5 fill-current' type={pathname === "/dashboard" ? 'filled' : 'outline'} />
                    <div className="text-xs text-current font-semibold">Home</div>
                </Link>

                <Link href="/receipts" className={`flex flex-col mb-2 items-center relative 
                    ${pathname === "/receipts" ? 'text-akauntme' : 'text-gray-700'}
                    `}>
                    <ReceiptIcon className='size-5 fill-current' type={pathname === "/receipts" ? 'filled' : 'outline'} />

                    <div className="text-xs text-current font-semibold">Receipt</div>
                </Link>



                {/* <div className="bg-akauntme items-center flex justify-center size-14 
          rounded-full absolute mb-16 left-[42%]">
                    +
                </div> */}
                <div></div>


                <Link href="/marketplace" className={`flex flex-col mb-2 items-center relative 
                    ${pathname === "/marketplace" ? 'text-akauntme' : 'text-gray-700'}
                    `}>
                    <MarketplaceIcon className='size-5 fill-current' type={pathname === "/marketplace" ? 'filled' : 'outline'} />

                    <div className="text-xs text-current font-semibold">Marketplace</div>
                </Link>

                <Link href="/settings" className={`flex flex-col mb-2 items-center relative 
                    ${pathname === "/settings" ? 'text-akauntme' : 'text-gray-700'}
                    `}>
                    <SettingsIcon className='size-5 fill-current' type={pathname === "/settings" ? 'filled' : 'outline'} />

                    <div className="text-xs text-current font-semibold">Settings</div>
                </Link>




            </div>
        </footer>

    )
}
