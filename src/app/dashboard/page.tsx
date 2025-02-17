'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from "@/components/layouts/MainLayout";
import { Tooltip } from '@/components/basics';
// import { SearchIcon, NotificationIcon, NoDataIcon } from "@/components/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { DExpensesIcon, DSalesIcon, DStockIcon, DdebtsIcon, FilterIcon, SearchIcon } from "@/Components/icons";


// const tabs = [
//     { icon: <DSalesIcon className="size-7 md:size-10" />, title: "Sales", content: <SalesChart /> },
//     { icon: <DdebtsIcon className="size-7 md:size-10" />, title: "Debts", content: <DebtsChart /> },
//     { icon: <DExpensesIcon className="size-7 md:size-10" />, title: "Expenses", content: <ExpensesChart /> },
//     { icon: <DStockIcon className="size-7 md:size-10" />, title: "Stocks", content: <StocksChart /> }
// ];


const tabs = [
    { icon: <DSalesIcon className="size-7 md:size-10" />, title: "Sales", content: `SALES` },
    { icon: <DdebtsIcon className="size-7 md:size-10" />, title: "Debts", content: `DEBTS` },
    { icon: <DExpensesIcon className="size-7 md:size-10" />, title: "Expenses", content: `EXPENSES` },
    { icon: <DStockIcon className="size-7 md:size-10" />, title: "Stocks", content: `STOCKS` }
];

const Page = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const [items, showItems] = useState(false);
    const [newItems, addNewItems] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        document.body.classList.remove("overflow-y-auto");
    })


    return <>
        <MainLayout>

            {/* <div className="px-5 bg-gradient-to-r from-red-500 via-purple-400 to-blue-500 rounded-md my-2 shadow-lg shadow-akauntme/30">
                <div className="max-w-[85rem] px-4 py-2.5 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-center md:text-start">
                            <p className="text-xs flex items-center gap-x-1 text-white uppercase tracking-wider font-bold">
                                Akauntme
                                <div>
                                    <svg className='size-4 fill-gray-100 stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M38.28125 5.3144531C38.006566 5.3328158 37.730624 5.3832154 37.458984 5.4667969 A 1.50015 1.50015 0 0 0 37.416016 5.4804688L18.197266 12.017578L9.0878906 12.705078 A 1.50015 1.50015 0 0 0 9.0585938 12.707031C6.2315486 12.976227 4 15.337314 4 18.199219L4 25.800781C4 28.213351 5.6211273 30.187683 7.8125 30.935547L8.7050781 39.314453C8.8709469 41.470747 10.73155 43 12.800781 43C15.100781 43 16.900391 41.086105 16.900391 38.900391L16.900391 31.904297L18.103516 31.984375L37.316406 38.519531 A 1.50015 1.50015 0 0 0 37.359375 38.533203C39.532492 39.201855 41.900391 37.52779 41.900391 35.199219L41.900391 26.230469C43.412051 25.658203 44.5 24.205783 44.5 22.5C44.5 20.794217 43.412051 19.341797 41.900391 18.769531L41.900391 8.8007812L41.896484 8.90625C41.981023 7.7227104 41.42825 6.603279 40.564453 5.9667969C40.132555 5.6485558 39.62839 5.4410173 39.095703 5.3535156C38.82936 5.3097648 38.555934 5.2960905 38.28125 5.3144531 z M 38.611328 8.3105469C38.684712 8.3230234 38.742055 8.3510535 38.785156 8.3828125C38.871356 8.4463305 38.919758 8.4768985 38.904297 8.6933594 A 1.50015 1.50015 0 0 0 38.900391 8.8007812L38.900391 35.199219C38.900391 35.669708 38.667445 35.796078 38.242188 35.666016L18.882812 29.080078 A 1.50015 1.50015 0 0 0 18.5 29.003906L15.5 28.802734 A 1.50015 1.50015 0 0 0 13.900391 30.300781L13.900391 38.900391C13.900391 39.514676 13.500781 40 12.800781 40C12.270012 40 11.729444 39.527691 11.695312 39.083984 A 1.50015 1.50015 0 0 0 11.691406 39.041016L10.691406 29.640625 A 1.50015 1.50015 0 0 0 9.3417969 28.306641C7.9688441 28.175883 7 27.138876 7 25.800781L7 18.199219C7 16.861124 7.9688441 15.824117 9.3417969 15.693359L17 15.117188L17 24.5 A 1.50015 1.50015 0 1 0 20 24.5L20 14.574219L38.341797 8.3339844C38.448517 8.3011474 38.537944 8.2980704 38.611328 8.3105469 z" />
                                    </svg>
                                </div>
                            </p>
                            <p className="mt-1 text-white font-medium text-[10px] sm:text-sm">
                                Latest updates and Features
                            </p>
                        </div>

                        <div className=" text-center flex md:text-start justify-end gap-x-1 items-center">

                            <a className="py-1 sm:py-2 px-2 sm:px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none" href="../figma.html">
                                Learn more
                                <svg className="flex-shrink-0 size-4 fill-akauntme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>

                            <a className="p-2 size-7 text-xl flex justify-center items-center gap-x-2 font-thin rounded-full text-gray-200 hover:text-white shadow-sm hover:bg-gray-50/50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                                &times;
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <header className="flex justify-between items-center border-b border-gray-100 px-5 py-2 lg:py-3.5">
                <div className="flex justify-center rounded-full size-8 lg:size-10 bg-akauntme">
                    <svg className="size-8 lg:size-10" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 15C30 23.25 23.25 30 15 30C6.75 30 0 23.25 0 15C0 6.75 6.75 0 15 0C23.25 0 30 6.75 30 15Z" fill="url(#paint0_radial_275_296)" />
                        <path d="M14.9999 30C19.3499 30 23.2499 28.125 26.0249 25.2C24.1499 20.925 19.9499 18 14.9999 18C10.0499 18 5.84985 20.925 3.97485 25.2C6.74985 28.125 10.6499 30 14.9999 30Z" fill="url(#paint1_radial_275_296)" />
                        <path d="M15 17.25C18.3137 17.25 21 14.5637 21 11.25C21 7.93629 18.3137 5.25 15 5.25C11.6863 5.25 9 7.93629 9 11.25C9 14.5637 11.6863 17.25 15 17.25Z" fill="url(#paint2_linear_275_296)" />
                        <path d="M14.9998 30C18.7498 30 22.1998 28.575 24.8248 26.325C23.3248 22.35 19.4998 19.5 14.9998 19.5C10.4998 19.5 6.6748 22.35 5.1748 26.325C7.7998 28.575 11.2498 30 14.9998 30Z" fill="url(#paint3_linear_275_296)" />
                        <defs>
                            <radialGradient id="paint0_radial_275_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.38275 3.29475) scale(30.234)">
                                <stop stopColor="#0370C8" />
                                <stop offset="0.484" stopColor="#036FC5" />
                                <stop offset="0.775" stopColor="#036ABD" />
                                <stop offset="1" stopColor="#0362B0" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_275_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.9626 8.13525) scale(0.375)">
                                <stop />
                                <stop offset="0.262" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint2_linear_275_296" x1="10.9298" y1="7.17975" x2="19.3013" y2="15.5513" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#75DAFF" />
                                <stop offset="1" stopColor="#1EA2E4" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_275_296" x1="9.75505" y1="20.4075" x2="20.1658" y2="30.8182" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#75DAFF" />
                                <stop offset="1" stopColor="#1EA2E4" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className="flex items-center border bg-gray-100 border-gray-400/50 rounded-md px-2 lg:w-[300px]">
                    <div className="border-r border-gray-400/50 pr-2">
                        <SearchIcon className="size-5 fill-gray-400" />
                    </div>
                    <input type="text" placeholder="Search sales, stocks and receipts..."
                        className="w-full bg-gray-100 placeholder:text-xs lg:placeholder:text-sm border-none 
                            outline-none focus:ring-0 focus:outline-none" />
                </div>
                <div className="rotate-45">
                    <NotificationIcon type="filled" className="size-6 fill-akauntme-2" />
                </div>
            </header> */}
            {/* 
            <div className="px-5 mt-2">
                <div className="flex justify-between items-center h-[90px]">
                    <h1 className="text-base md:text-xl lg:text-2xl font-semibold">Hi Mark</h1>

                    <div>

                        <motion.div
                            className="flex items-center"
                            initial={{ x: 0 }}
                            animate={{ x: isExpanded ? -20 : 0 }}
                            transition={{ duration: 0.2 }}
                        >

                            <motion.button
                                className={`flex items-center ring justify-between gap-x-2 outline-none 
                             focus:outline-none border bg-akauntme rounded-md text-white 
                            px-4 py-1`}

                                onClick={toggleExpand}

                                transition={{ duration: 0.2 }}
                            >
                                Today
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.60745 0C8.51043 2.42305e-05 8.41562 0.0296948 8.33516 0.0852157C8.25469 0.140737 8.19223 0.219583 8.15577 0.311666C8.1193 0.40375 8.11049 0.504882 8.13045 0.602125C8.15042 0.699368 8.19826 0.788298 8.26785 0.857538L11.8232 4.49899L8.26785 8.14044C8.22106 8.18644 8.18371 8.24155 8.15798 8.30253C8.13224 8.36351 8.11865 8.42914 8.11799 8.49557C8.11733 8.56199 8.12962 8.62789 8.15414 8.68939C8.17865 8.75089 8.2149 8.80677 8.26077 8.85374C8.30663 8.90072 8.36119 8.93784 8.42123 8.96295C8.48128 8.98806 8.54562 9.00065 8.61048 8.99997C8.67534 8.9993 8.73941 8.98538 8.79895 8.95902C8.85849 8.93267 8.91229 8.89441 8.95721 8.84649L12.8573 4.85201C12.9487 4.75837 13 4.63139 13 4.49899C13 4.36658 12.9487 4.2396 12.8573 4.14596L8.95721 0.151483C8.91177 0.103554 8.8574 0.0654512 8.79733 0.0394311C8.73725 0.013411 8.67268 2.65595e-06 8.60745 0ZM4.37795 0.000650143C4.25134 0.00442935 4.13114 0.0585245 4.04279 0.151483L0.142731 4.14596C0.0513397 4.2396 0 4.36658 0 4.49899C0 4.63139 0.0513397 4.75837 0.142731 4.85201L4.04279 8.84649C4.08771 8.89441 4.14151 8.93267 4.20105 8.95902C4.26059 8.98538 4.32466 8.9993 4.38952 8.99997C4.45438 9.00065 4.51872 8.98806 4.57877 8.96295C4.63882 8.93784 4.69337 8.90072 4.73923 8.85374C4.7851 8.80677 4.82135 8.75089 4.84586 8.68939C4.87038 8.62789 4.88267 8.56199 4.88201 8.49557C4.88135 8.42914 4.86776 8.36351 4.84202 8.30253C4.81629 8.24155 4.77894 8.18644 4.73215 8.14044L1.17678 4.49899L4.73215 0.857538C4.80248 0.787383 4.8505 0.697116 4.86991 0.598551C4.88933 0.499985 4.87924 0.397713 4.84096 0.305118C4.80268 0.212524 4.73801 0.133921 4.6554 0.0795958C4.57278 0.025271 4.47608 -0.00224461 4.37795 0.000650143Z" fill="white" />
                                </svg>
                            </motion.button>
                            {isExpanded && (
                                <motion.div
                                    className="ml-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, width: isExpanded ? '9rem' : '6rem' }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="text-gray-700 py-0.5 rounded-md border px-1 flex justify-between items-center border-akauntme-2">
                                        <div className='text-akauntme font-semibold hover:bg-akauntme hover:text-white cursor-pointer py-1 px-2 rounded-md'>week</div>
                                        <div className='text-akauntme font-semibold hover:bg-akauntme hover:text-white cursor-pointer py-1 px-2 rounded-md'>month</div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                    </div>
                </div>

                <div className='grid grid-rows-2 items-center grid-cols-12 lg:grid-rows-1  lg:gap-x-3'>

                    <div
                        className='columns-1 relative col-span-12 lg:col-span-3 bg-akauntme overflow-hidden rounded-xl 
                    h-[120px] md:h-[100px]  items-center flex'
                    >
                        <button className='outline-none border-none shadow-sm absolute h-3 p-1 
                        cursor-pointer flex items-center justify-around gap-x-1 rounded-[10px]
                         bg-akauntme-2 top-2 right-2'>
                            <div className='size-1.5 rounded-full bg-white'></div>
                            <div className='size-1.5 rounded-full bg-white'></div>
                            <div className='size-1.5 rounded-full bg-white'></div>
                        </button>

                        <div className='bg-[#00499C] w-8 flex justify-center rounded-r-md py-1'>

                            <svg className="size-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path d="M10.5 6C8.0324991 6 6 8.0324991 6 10.5L6 37.5C6 39.985 8.015 42 10.5 42L37.5 42C39.985 42 42 39.985 42 37.5L42 16.5C42 14.015 39.985 12 37.5 12L10.5 12C9.672 12 9 11.328 9 10.5C9 9.6535009 9.6535009 9 10.5 9L35.5 9 A 1.50015 1.50015 0 1 0 35.5 6L10.5 6 z M 33.5 24C34.881 24 36 25.119 36 26.5C36 27.881 34.881 29 33.5 29C32.119 29 31 27.881 31 26.5C31 25.119 32.119 24 33.5 24 z" />
                            </svg>
                        </div>

                        <div className='text-white ml-5 flex flex-col gap-y-2'>
                            <h2 className='text-base '>Net sales</h2>
                            <h1 className='text-xl font-semibold tracking-wide'>&#8358;100,000.00</h1>
                        </div>

                        <div className='ml-8'>
                            <svg className='size-20' width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.62207" y="34.3943" width="6.16072" height="58.5268" rx="1" transform="rotate(-44.2605 6.62207 34.3943)" fill="url(#paint0_linear_215_74)" />
                                <rect x="30.3372" y="11.2836" width="6.16072" height="58.5268" rx="1" transform="rotate(-44.2605 30.3372 11.2836)" fill="url(#paint1_linear_215_74)" />
                                <rect x="8.87549" y="36.7068" width="6.16072" height="65.3832" rx="1" transform="rotate(-75.868 8.87549 36.7068)" fill="url(#paint2_linear_215_74)" />
                                <rect x="18.2773" y="59.5955" width="6.16072" height="58.5268" rx="1" transform="rotate(-134.261 18.2773 59.5955)" fill="url(#paint3_linear_215_74)" />
                                <rect x="26.877" y="68.4198" width="6.16072" height="58.5268" rx="1" transform="rotate(-134.261 26.877 68.4198)" fill="url(#paint4_linear_215_74)" />
                                <defs>
                                    <linearGradient id="paint0_linear_215_74" x1="9.70243" y1="34.3943" x2="9.70243" y2="92.9211" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_215_74" x1="33.4175" y1="11.2836" x2="33.4175" y2="69.8104" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_215_74" x1="11.9558" y1="36.7068" x2="11.9558" y2="102.09" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_215_74" x1="21.3577" y1="59.5955" x2="21.3577" y2="118.122" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_215_74" x1="29.9573" y1="68.4198" x2="29.9573" y2="126.947" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                        <div className=''>
                            <svg className='size-12' width="74" height="69" viewBox="0 0 74 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.7136 41.0659C8.29593 40.2548 9.57711 40.6899 9.52967 41.6826L9.51032 42.0876C9.49407 42.4275 9.65305 42.751 9.93205 42.9458L10.2361 43.1581C11.056 43.7307 10.6063 45.0186 9.60281 44.972L9.23067 44.9547C8.88919 44.9388 8.56195 45.0972 8.36257 45.3749L8.12505 45.7058C7.54271 46.5169 6.26153 46.0818 6.30898 45.0891L6.32833 44.6841C6.34457 44.3442 6.1856 44.0207 5.9066 43.8259L5.60255 43.6136C4.78266 43.041 5.23233 41.7531 6.23584 41.7997L6.60797 41.817C6.94945 41.8329 7.27669 41.6745 7.47607 41.3968L7.7136 41.0659Z" fill="white" fillOpacity="0.5" />
                                <path d="M42.6885 56.1569C43.2708 55.3458 44.552 55.7809 44.5045 56.7736L44.4852 57.1785C44.4689 57.5184 44.6279 57.8419 44.9069 58.0368L45.2109 58.2491C46.0308 58.8216 45.5812 60.1096 44.5777 60.0629L44.2055 60.0456C43.864 60.0298 43.5368 60.1882 43.3374 60.4659L43.0999 60.7967C42.5176 61.6078 41.2364 61.1727 41.2838 60.18L41.3032 59.7751C41.3194 59.4352 41.1605 59.1117 40.8814 58.9168L40.5774 58.7045C39.7575 58.132 40.2072 56.844 41.2107 56.8906L41.5828 56.9079C41.9243 56.9238 42.2515 56.7654 42.4509 56.4877L42.6885 56.1569Z" fill="url(#paint0_linear_201_78)" />
                                <path d="M57.8551 20.465C58.456 19.5163 59.9254 20.1072 59.6822 21.1997L58.9099 24.6682C58.8248 25.0504 58.9719 25.445 59.2862 25.6776L63.6642 28.918C64.5456 29.5703 63.8668 30.9597 62.8014 30.684L58.0824 29.4628C57.6629 29.3542 57.2186 29.5269 56.9818 29.8905L54.7048 33.387C54.0808 34.3452 52.595 33.6946 52.8961 32.595L53.9083 28.8987C54.0263 28.4675 53.8425 28.0131 53.4581 27.7859L48.8694 25.0737C47.9205 24.5129 48.4619 23.0565 49.5542 23.2317L54.841 24.0794C55.2397 24.1433 55.6398 23.9628 55.8559 23.6216L57.8551 20.465Z" fill="url(#paint1_linear_201_78)" />
                                <defs>
                                    <linearGradient id="paint0_linear_201_78" x1="44.6656" y1="53.403" x2="41.2096" y2="63.5801" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_201_78" x1="60.925" y1="15.6178" x2="51.4374" y2="38.8471" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#42ABFA" />
                                        <stop offset="1" stopColor="#0070F0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>

                    <Swiper
                        className='w-full columns-1 mt-2 lg:mt-0 col-span-12 h-[120px]  md:h-[100px] 
                      lg:col-span-9
                    lg:row-span-1'
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        navigation={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className="bg-akauntme-2 rounded-xl h-[90px]">
                            <div >
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-akauntme-2 rounded-xl h-[90px]">
                            <div >
                                Slide 2
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-akauntme-2 rounded-xl h-[90px]">
                            <div >
                                Slide 3
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>

                <div className='border bg-white shadow-sm rounded-xl py-4 px-2 mt-4'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className='border flex justify-center items-center bg-gray-200/20 mb-[100px] shadow-md shadow-akauntme-2/20 rounded-xl py-4 px-2 mt-4 h-[300px]'>
                    <div className='flex flex-col justify-between items-center'>
                        <NoDataIcon className='fill-gray-300 size-20' />
                        <h2 className='text-gray-500 font-semibold'>No data</h2>
                        <p className='text-gray-400 font-normal'>No Inventory added yet.</p>
                    </div>

                </div>



            </div> */}

            <div className="mb-10 flex flex-col gap-y-8">
                <div className="flex flex-col">
                    <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-y-5 lg:gap-y-4 lg:gap-x-4 ">
                        <div className=" lg:row-span-3 lg:mt-3 lg:max-h-[670px] relative bg-white dark:bg-akauntme-dark rounded-md border dark:border-akauntme/20 shadow-sm">

                            {
                                newItems ? <motion.div className="h-[60vh] absolute w-full z-[50] rounded-b-lg shadow-md bg-white p-4 border-t dark:border-akauntme/20"

                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 65, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab similique ipsum vel possimus aliquam mollitia non quaerat laborum doloribus nobis accusamus, soluta rem excepturi reiciendis dicta necessitatibus fugit repellat dolor!
                                </motion.div> :
                                    ''
                            }


                            <div className="flex justify-between items-center p-4 lg:border-b border-gray-100 dark:border-akauntme/20">
                                <h2 className="font-semibold">Items</h2>
                                <div className="flex items-center gap-x-2 -z-[00]">


                                    <Tooltip text={`${newItems ? '' : 'Add sales,expenses and more'}`} bg="akauntme dark:bg-akauntme-dark-2">
                                        <button
                                            onClick={() => addNewItems(!newItems)}
                                            className="border dark:border-gray-500 shadow-sm gap-x-2 px-2 py-1 rounded-lg flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                                className={`${newItems ? 'rotate-45' : ''} transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                                            >
                                                <path d="M23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5L22.5 22.5L6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5L22.5 25.5L22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5L25.5 25.5L41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5L25.5 22.5L25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z" />
                                            </svg>
                                            Add new

                                        </button>
                                    </Tooltip>
                                    <button
                                        onClick={() => showItems(!items)}

                                        className="border dark:border-gray-500 shadow-sm px-2 py-2 flex lg:hidden justify-center items-center rounded-lg">
                                        <svg
                                            className={`${items ? 'rotate-180' : ''} transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                            <path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={`${items ? 'flex absolute z-[10] lg:relative' : 'hidden'} shadow-md 
        shadow-akauntme/30 h-[80vh] lg:shadow-none w-full mt-1 lg:mt-0 py-10 rounded-lg lg:rounded-none border-t lg:border-none
         bg-white dark:bg-akauntme-dark lg:bg-transparent lg:flex px-4 lg:py-6 overflow-x-hidden overflow-y-auto  custom-scrollbar mb-5`}
                            >
                                <ul className="w-full flex flex-col gap-y-5">
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                    <li className="bg-gray-100 dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {/* grid  gap-4 sm:gap-6 */}
                        <div className="lg:max-h-[200px] lg:col-span-2  items-center flex gap-x-1 justify-between w-full">
                            <div className="w-full max-h-[100px] lg:max-h-[120px] flex flex-col justify-center bg-white border-2 hover:border-akauntme shadow-sm rounded-xl dark:bg-akauntme-dark dark:border-akauntme/20">
                                <div className="p-4 md:p-5">
                                    <div className="my-2 flex justify-center items-center  bg-akauntme shadow-sm shadow-akauntme/50 rounded-lg size-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-white size-6">
                                            <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-x-2 my-2">
                                        <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                                            Total balance
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                    The number of daily users
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 flex items-center gap-x-2 justify-between">
                                        <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-indigo-950 dark:text-neutral-200">
                                            &#8358;72,540.00
                                        </h3>
                                        <div className="hidden lg:flex items-center gap-x-1 text-green-600 bg-green-500/20 px-2 py-1 rounded-md">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                            <span className="inline-block text-xs sm:text-sm">
                                                1.7%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-h-[100px] lg:max-h-[120px] flex flex-col justify-center bg-white border-2 hover:border-akauntme shadow-sm rounded-xl dark:bg-akauntme-dark dark:border-akauntme/20">
                                <div className="p-4 md:p-5">
                                    <div className="my-2 flex justify-center items-center  bg-akauntme shadow-sm shadow-akauntme/50 rounded-lg size-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-white size-6">
                                            <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-x-2 my-2">
                                        <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                                            Total Sales
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                    The number of daily users
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 flex items-center gap-x-2 justify-between">
                                        <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-indigo-950 dark:text-neutral-200">
                                            &#8358;72,540.00
                                        </h3>
                                        <div className="hidden lg:flex items-center gap-x-1 text-green-600 bg-green-500/20 px-2 py-1 rounded-md">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                            <span className="inline-block text-xs sm:text-sm">
                                                1.7%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-h-[450px] p-2 lg:p-4 lg:col-span-2 lg:row-span-2 overflow-x-auto overflow-y-hidden  bg-white dark:bg-akauntme-dark rounded-md border dark:border-akauntme/20 shadow-sm">
                            <div className='relative'>
                                <h2 className='px-2.5 font-semibold'>Quick Link</h2>
                                <div className="flex justify-between items-center p-2 w-full gap-x-2 lg:gap-x-4">

                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            className={` ${activeTab === index ? 'border-akauntme *:text-akauntme' : 'border-akauntme/10'
                                                }  focus:ring-0 focus:outline-none appearance-none flex flex-col justify-center items-center group  rounded-lg shadow-lg shadow-ageno/10 h-[70px] w-full border-2  hover:border-akauntme hover:cursor-pointer lg:h-[90px] lg:w-full`}
                                            onClick={() => setActiveTab(index)}
                                        >

                                            {tab.icon}
                                            <h3 className="font-semibold text-sm md:text-base group-hover:text-akauntme">{tab.title}</h3>
                                        </button>
                                    ))}


                                </div>
                                <div className='relative'>

                                    <motion.div
                                        className="absolute top-1 h-1 rounded-full bg-gradient-to-r from-akauntme/80 to-teal-500"
                                        layoutId="underline"
                                        style={{ width: `${100 / tabs.length}%`, left: `${(100 / tabs.length) * activeTab}%` }}
                                    >


                                    </motion.div>

                                    <div className="p-4 border rounded-lg">
                                        <p className="text-gray-700">{tabs[activeTab]['content']}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="lg:-mt-5 bg-white border dark:border-akauntme/20 shadow-sm dark:bg-akauntme-dark dark:border-akauntme/2  rounded-lg">
                    <div className="flex justify-between items-center border-b dark:border-akauntme/20 shadow-sm py-2 px-4">
                        <h1 className="text-sm lg:text-xl text-slate-700 font-semibold dark:text-gray-400">
                            Recent Activities
                        </h1>
                        <div className="flex items-center gap-x-1 lg:gap-x-4">
                            <div className="hidden lg:flex items-center bg-white dark:bg-akauntme-dark-2 border dark:border-akauntme/20 shadow-sm  rounded-lg  px-2">
                                <SearchIcon className="size-4 fill-gray-600" />
                                <input type="text" placeholder="Search transactions" className="border-none bg-transparent outline-none ring-0 focus:outline-none focus:border-none appearance-none focus:ring-0" />
                            </div>
                            <button
                                className="border flex lg:hidden dark:border-akauntme/20 hover:bg-gray-100 dark:hover:bg-slate-900 shadaw-sm rounded-lg bg-white dark:bg-akauntme-dark-2 p-2 items-center gap-x-1"

                            >

                                <SearchIcon className="size-4 fill-gray-600" />
                                <span className="text-sm">Search</span>

                            </button>

                            <button
                                className="border dark:border-akauntme/20 hover:bg-gray-100 dark:hover:bg-slate-900 shadaw-sm rounded-lg bg-white dark:bg-akauntme-dark-2 p-2 flex items-center gap-x-2"

                            >
                                <FilterIcon className="size-3" />
                                <span className="text-sm">Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className=" py-2 px-4">
                        <div className="max-w-[85rem] py-10 mx-auto">
                            <div className="flex flex-col">
                                <div className="-m-1.5 overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="bg-gray-50 dark:bg-neutral-800">
                                            <tr>
                                                <th scope="col" className="ps-6 py-3 text-start">
                                                    <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </th>

                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Type
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Status
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Portfolio
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Created
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-end"></th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>

                                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                                                <span className="font-semibold text-gray-800 dark:text-neutral-200">12</span> results
                                            </p>
                                        </div>

                                        <div>
                                            <div className="inline-flex gap-x-2">
                                                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                    Prev
                                                </button>

                                                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    Next
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                </div> */}
            </div>
        </MainLayout>
    </>
}



export default Page;