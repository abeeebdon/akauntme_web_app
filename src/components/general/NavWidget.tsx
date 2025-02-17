"use client";
import React, { useState } from 'react'
import { HamburgerIcon, LogoIcon, ProfileIcon, SearchIcon } from '@/components/icons'
import { motion, useAnimation } from 'framer-motion';
import SearchWidget from './SearchWidget'
import SideBarWidget from './SideBarWidget';
import InnerSideBarWidget from './InnerSideBarWidget';
import ProfileWidget from './ProfileWidget';
import { Tooltip } from '@/components/basics';
import NotificationWidget from './NotificationWidget';
import SearchInnerWidget from './SearchInnerWidget';

export default function NavWidget() {
    const [sidebarOpen, isSidebarOpen] = useState(false);
    const [isProfile, setIsProfileVisible] = useState(false);
    const [isNotification, setNotificationVisible] = useState(false);
    const [isMobileSearchBar, setMobileSearchBar] = useState(false);

    const ShowMobileSideBar = () => {
        isSidebarOpen(!sidebarOpen);
        controls.start(sidebarOpen ? "closed" : "open");
    }

    const controls = useAnimation();

    return (
        <>
            <motion.nav
                animate={controls}

                className='flex w-full px-3 h-14 lg:h-[3.6rem] justify-between items-center'>
                <button className='w-2/12 lg:hidden outline-none border-none' onClick={() => ShowMobileSideBar()}>
                    <HamburgerIcon className='size-5 fill-akauntme dark:fill-gray-500' />
                </button>
                <motion.div className='w-8/12 lg:max-w-80 lg:opacity-100 z-30'


                >
                    <SearchWidget />
                </motion.div>

                <motion.div
                    className="absolute mx-auto left-[15%] md:left-[20%] lg:hidden z-20"
                    style={{ opacity: 0 }}
                    variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: '-10%', opacity: 0 }
                    }}
                >
                    <LogoIcon className='fill-akauntme dark:fill-white size-28' type='alone' />
                </motion.div>

                <motion.div


                    className='flex justify-center items-center gap-x-2'>
                    <button
                        onClick={() => setMobileSearchBar(!isMobileSearchBar)}

                        className='md:hidden flex justify-center items-center rounded-full size-9 shadow-sm focus:border dark:focus:border-neutral-700 text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-100 dark:focus:bg-akauntme-dark-2 hover:bg-gray-100 dark:hover:bg-akauntme-dark-2   *:hover:text-gray-600 *:dark:hover:text-gray-500'

                    >

                        <SearchIcon className="size-5 fill-current" />
                    </button>

                    <Tooltip text="Notifications">
                        <button
                            onClick={() => setNotificationVisible(!isNotification)}

                            className='flex justify-center items-center rounded-full size-9 shadow-sm focus:border dark:focus:border-neutral-700 text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-100 dark:focus:bg-akauntme-dark-2 hover:bg-gray-100 dark:hover:bg-akauntme-dark-2   *:hover:text-gray-600 *:dark:hover:text-gray-500'

                        >
                            <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                            </svg>
                        </button>
                    </Tooltip>


                    <Tooltip text="Helps">

                        <button
                            className='flex justify-center items-center rounded-full size-9 shadow-sm focus:border dark:focus:border-neutral-700 text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-100 dark:focus:bg-akauntme-dark-2 hover:bg-gray-100 dark:hover:bg-akauntme-dark-2   *:hover:text-gray-600 *:dark:hover:text-gray-500'

                        >

                            <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                            </svg>
                        </button>
                    </Tooltip>


                    <button className='flex justify-end cursor-pointer border-none outline-none'
                        onClick={() => setIsProfileVisible(true)}
                    >
                        <ProfileIcon className='size-8 lg:size-10' />
                    </button>
                </motion.div>

            </motion.nav >

            <motion.div
                animate={sidebarOpen ? "open" : "closed"}
                variants={{
                    open: {
                        x: 1,
                        translateX: 0,
                        transition: {
                            duration: 0.3,
                        }
                    },
                    closed: {
                        x: 0,
                        translateX: -10,
                        transition: {
                            duration: 0.3,
                            delay: 0.2
                        }
                    }
                }}
                className={`absolute ${sidebarOpen ? 'block' : 'hidden'} z-[1000] sm:w-[60%] bg-akauntme dark:bg-akauntme-dark border-t lg:hidden border-r border-white dark:border-akauntme/20 h-screen`}>
                <div className="bg-akauntme dark:bg-akauntme-dark">
                    <InnerSideBarWidget />
                </div>
            </motion.div>

            <motion.div
                animate={isMobileSearchBar ? "open" : "closed"}
                variants={{
                    open: {
                        x: 1,
                        translateX: 0,
                        transition: {
                            duration: 0.3,
                        }
                    },
                    closed: {
                        x: 0,
                        translateX: 100,
                        transition: {
                            duration: 0.3,
                            delay: 0.2,

                        }
                    }
                }}
                className={`absolute top-0 ${isMobileSearchBar ? 'block' : 'hidden'} z-[1000] py-3 bg-white w-full shadow-sm dark:bg-akauntme-dark border-t lg:hidden border-r border-white dark:border-akauntme/20`}>
                <div className='flex justify-between items-center mx-6 gap-x-1'>
                    <div className='w-full'>
                        <SearchInnerWidget />

                    </div>
                    <button onClick={() => setMobileSearchBar(false)} className='flex justify-center bg-white text-base dark:bg-akauntme-dark-2 items-center rounded-full size-8 border dark:border-gray-400 shadow-sm'>
                        &times;
                    </button>


                </div>
            </motion.div>

            {/* <ProfileWidget

                isVisible={isProfile} onClose={() => setIsProfileVisible(false)}
            /> */}

            {/* <NotificationWidget
                isVisible={isNotification} onClose={() => setNotificationVisible(false)}
            /> */}

        </>

    )
}
