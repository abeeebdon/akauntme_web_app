"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from '../basics';
import { AudioWidget } from '../common';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const HeaderWidget = () => {

    const [isMobile, setIsMobile] = useState(false);
    const url = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className={` ${isScrolled ? 'shadow-sm border-akauntme-deep/20' : 'border-transparent'} transition-all fixed w-full z-50`}>
                {/* bg-akauntme-deep header-pattern */}
                <nav className='flex items-center mt-4 justify-between mx-2 md:mx-5 lg:mx-20 p-2'>

                    <div className='flex item-center gap-x-2 justify-start h-full w-auto z-20 relative overflow-visible'>
                        <div className={` ${isScrolled ? 'bg-white border-akauntme-deep/50' : 'bg-akauntme-deep border-transparent'} border transition-all relative rounded-full flex items-center  py-1 md:py-2 px-4
                       h-auto mr-0 `}>

                            <Link href='/' className='relative'>
                                <AudioWidget src='./' icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='fill-white size-3'>
                                        <path d="M26.599609 2C25.899609 2 25.300781 2.3007813 24.800781 2.8007812L12 16L12 34L24.900391 47.199219C25.300391 47.699219 25.999219 48 26.699219 48C27.999219 48 29.099609 46.899609 29.099609 45.599609L29.099609 4.4003906C28.999609 3.1003906 27.899609 2 26.599609 2 z M 38.470703 6.7929688 A 1.0001 1.0001 0 0 0 38.046875 8.6914062C44.023195 11.726997 48.099609 17.882222 48.099609 25C48.099609 32.117778 44.023195 38.273003 38.046875 41.308594 A 1.0001377 1.0001377 0 1 0 38.953125 43.091797C45.576805 39.727388 50.099609 32.882222 50.099609 25C50.099609 17.117778 45.576805 10.272612 38.953125 6.9082031 A 1.0001 1.0001 0 0 0 38.470703 6.7929688 z M 34.902344 12.09375 A 1.0001 1.0001 0 0 0 34.419922 13.976562C38.308048 16.105776 41 20.279085 41 25C41 29.733987 38.400474 33.889373 34.535156 35.914062 A 1.0003098 1.0003098 0 1 0 35.464844 37.685547C39.999526 35.310237 43 30.466013 43 25C43 19.520915 39.892733 14.693444 35.380859 12.222656 A 1.0001 1.0001 0 0 0 34.902344 12.09375 z M 5 16C3.3 16 2 17.3 2 19L2 31C2 32.7 3.3 34 5 34L10 34L10 16L5 16 z M 30.636719 18.398438 A 1.0001 1.0001 0 0 0 30.466797 20.373047C32.508799 20.863127 34 22.744444 34 25C34 27.255556 32.525832 29.049798 30.429688 29.636719 A 1.0001 1.0001 0 1 0 30.96875 31.5625C33.872604 30.749421 36 28.144444 36 25C36 21.855556 33.891592 19.137654 30.933594 18.427734 A 1.0001 1.0001 0 0 0 30.636719 18.398438 z" />
                                    </svg>
                                } />

                                <Tooltip text={<span>Pronounced: <span className='font-semibold italic text-sm '>Account me</span></span>}
                                    bg="akauntme-deep shadow-md">
                                    <div className=' rounded-full p-1  lg:p-0 gap-x-1 flex flex-col lg:flex-row transition-all'>
                                        <div className={`${isScrolled ? 'before:bg-akauntme-deep' : 'before:bg-white'} flex items-center gap-x-1 justify-center relative before:hidden lg:before:flex
                                 before:absolute before:left-24 before:w-[0.5px] before:h-10  before:content-[""] `}>

                                            <svg className={` ${isScrolled ? 'fill-akauntme-deep' : 'fill-white'} size-5  transition-all`} width="65" height="54" viewBox="0 0 65 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M65.0002 53.663H43.6042C39.8534 52.3271 37.166 48.742 37.166 44.5289C37.166 44.095 37.2003 43.6611 37.2575 43.2387L41.0655 36.7535L46.8977 26.8315L65.0002 53.663Z" />
                                                <path d="M43.4551 19.41L27.9943 46.8123L26.2675 49.8837C26.2675 49.8837 26.2446 49.9065 26.2332 49.9179C24.3463 52.2014 21.4989 53.6629 18.2969 53.6629H0L21.7619 15.8477L23.4886 12.8334C23.4886 12.8334 23.4925 12.8296 23.5001 12.822L30.876 0L38.7666 12.1712L41.0079 15.6422L43.4551 19.41Z" />
                                            </svg>
                                            <span className={` ${isScrolled ? 'text-akauntme-deep' : 'text-white'} font-semibold tracking-wide text-sm `}>Akauntme</span>

                                        </div>
                                        <div className={`${isScrolled ? 'text-akauntme-deep' : 'text-white'} font-[500]  text-xs w-32 text-center  hidden lg:flex`}>
                                            Your smart trusted secure
                                            accountant
                                        </div>
                                    </div>
                                </Tooltip>
                            </Link>



                        </div>
                        <div className='md:hidden relative rounded-full flex justify-center items-center p-1 md:py-2 md:px-3 bg-white h-auto mr-0'>
                            <button
                                onClick={() => setIsMobile(!isMobile)}

                                className={`hover:bg-akauntme-deep text-akauntme-deep ${isMobile ? 'bg-akauntme-deep text-white *:text-white' : ''} font-semibold *:hover:text-white flex gap-x-1 
                        items-center hover:text-white cursor-pointer px-2 py-1 rounded-full border border-akauntme shadow-md`}>

                                <div className='w-5'>

                                    {
                                        isMobile ?

                                            <svg className='fill-current' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="10.6066" width="15" height="2" rx="1" transform="rotate(-45 0 10.6066)" />
                                                <rect x="1.41418" width="15" height="2" rx="1" transform="rotate(45 1.41418 0)" />
                                            </svg>


                                            :
                                            <svg className='fill-current' width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="15" height="2" rx="1" />
                                                <rect y="6" width="15" height="2" rx="1" />
                                            </svg>
                                    }

                                </div>

                                Menu

                            </button>
                        </div>

                        <div className='hidden md:flex bg-white rounded-full items-center py-2 px-4 border border-akauntme-deep/50 shadow-md'>
                            <ul className='flex justify-between items-center'>
                                <li>
                                    <Link href="/platform"
                                        className={`${url === '/platform' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}
                                    >
                                        Platform
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/resources"

                                        className={`${url === '/resources' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}
                                    >
                                        Resources
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pricing"
                                        className={`${url === '/pricing' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact-us"
                                        className={`${url === '/contact-us' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>

                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about"
                                        className={`${url === '/about' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>
                                        About us
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='flex gap-x-1 items-center'>
                        <div className={` ${isScrolled ? 'border-akauntme-deep/50' : ''} shadow-md bg-white flex items-center p-1 rounded-full relative h-full border border-transparent hover:border-akauntme-deep/50`}>
                            <path
                                className='fill-white w-full h-full'
                                d=" M121.42523532602432 31.907926391718238 C125.04404058194723 27.106722602207157, 129.83095655702985 27.10672260220716, 133.44976181295274 31.90792639171824 L133.44976181295274 7.929575134160663 C129.83095655702985 12.730778923671743, 125.04404058194723 12.73077892367175, 121.42523532602432 7.929575134160668 Z "
                            />
                            <Link href="/login" className={` ${isScrolled ? 'text-akauntme-deep hover:text-white hover:bg-akauntme-deep' : 'bg-akauntme-deep text-white'} 
                        rounded-full px-2 py-0.5 `}>Login</Link>
                        </div>
                        <div className={`  ${isScrolled ? 'border-akauntme-deep/50' : ''} shadow-md hidden md:flex bg-white items-center p-1 rounded-full border border-transparent hover:border-akauntme-deep/50`}>
                            <Link href="/register" className={` ${isScrolled ? 'text-akauntme-deep hover:text-white hover:bg-akauntme-deep' : 'bg-akauntme-deep text-white'} 
                        rounded-full px-2 py-0.5 `}>Register</Link>
                        </div>
                    </div>
                </nav>

            </header>

            <motion.div
                animate={isMobile ? "open" : "closed"}
                style={{ opacity: 0, display: 'none' }}

                variants={{
                    open: {
                        y: 1,
                        opacity: 1,
                        display: 'block',
                        transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }
                    },
                    closed: {
                        y: 20,
                        opacity: 0,
                        display: 'none',
                        transition: {
                            duration: 0.3,
                            delay: 0.2
                        }
                    }
                }}

                className='bg-white fixed top-20 lg:hidden w-full z-[1000]'>
                <div className='shadow-md rounded-lg mx-6 shadow-akauntme-deep/30 my-5'>
                    <div className='py-2 px-2 mx-4'>
                        <ul className='w-full flex flex-col gap-y-3'>
                            <li className='py-2'>
                                <Link href="/platform" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Platform
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Manage,track what matters most in your business with <span className='text-akauntme-deep italic'>Akauntme</span>
                                    </div>

                                </Link>
                            </li>

                            <li className='py-2'>
                                <Link href="/resources" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Resources
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Get resources and learn how <span className='text-akauntme-deep italic'>Akauntme</span> can be valuable for both your personal and Business usage
                                    </div>

                                </Link>
                            </li>



                            <li className='py-2'>
                                <Link href="/pricing" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Pricing
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Get the pricing plan that suites your Business usage
                                    </div>

                                </Link>
                            </li>



                            <li className='py-2'>
                                <Link href="/contact-us" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Contact us
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Have any complain or recommendation, we are all ears.
                                    </div>

                                </Link>
                            </li>


                            <li className='py-2'>
                                <Link href="/about" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            About us
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Get to know the team behind Akauntme
                                    </div>

                                </Link>
                            </li>

                            <li className='py-2 w-full'>

                                <a href="#" className='rounded-full px-2 py-2 w-full  hover:bg-white hover:text-akauntme-deep hover:shadow-md text-white bg-akauntme-deep'>Book Demo</a>

                            </li>








                        </ul>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default HeaderWidget;
