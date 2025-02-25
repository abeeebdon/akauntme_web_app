'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from '@/components/basics'
// import { SearchIcon, NotificationIcon, NoDataIcon } from "@/components/icons";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import {
  DExpensesIcon,
  DSalesIcon,
  DStockIcon,
  DdebtsIcon,
  FilterIcon,
  SearchIcon,
} from '@/components/icons'

// const tabs = [
//     { icon: <DSalesIcon className="size-7 md:size-10" />, title: "Sales", content: <SalesChart /> },
//     { icon: <DdebtsIcon className="size-7 md:size-10" />, title: "Debts", content: <DebtsChart /> },
//     { icon: <DExpensesIcon className="size-7 md:size-10" />, title: "Expenses", content: <ExpensesChart /> },
//     { icon: <DStockIcon className="size-7 md:size-10" />, title: "Stocks", content: <StocksChart /> }
// ];

const tabs = [
  {
    icon: <DSalesIcon className="size-7 md:size-10" />,
    title: 'Sales',
    content: `SALES`,
  },
  {
    icon: <DdebtsIcon className="size-7 md:size-10" />,
    title: 'Debts',
    content: `DEBTS`,
  },
  {
    icon: <DExpensesIcon className="size-7 md:size-10" />,
    title: 'Expenses',
    content: `EXPENSES`,
  },
  {
    icon: <DStockIcon className="size-7 md:size-10" />,
    title: 'Stocks',
    content: `STOCKS`,
  },
]

const Page = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const [items, showItems] = useState(false)
  const [newItems, addNewItems] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  //   useEffect(() => {
  //     document.body.classList.add('overflow-hidden')
  //     document.body.classList.remove('overflow-y-auto')
  //   })

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-8">
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-y-5 lg:gap-y-4 lg:gap-x-4 ">
            <div className=" lg:row-span-3 lg:mt-3 lg:max-h-[670px] relative bg-white dark:bg-akauntme-dark rounded-md border dark:border-akauntme/20 shadow-sm">
              {newItems ? (
                <motion.div
                  className="h-[60vh] absolute w-full z-[50] rounded-b-lg shadow-md bg-white p-4 border-t dark:border-akauntme/20"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 65, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  similique ipsum vel possimus aliquam mollitia non quaerat
                  laborum doloribus nobis accusamus, soluta rem excepturi
                  reiciendis dicta necessitatibus fugit repellat dolor!
                </motion.div>
              ) : (
                ''
              )}

              <div className="flex justify-between items-center p-4 lg:border-b border-gray-100 dark:border-akauntme/20">
                <h2 className="font-semibold">Items</h2>
                <div className="flex items-center gap-x-2 -z-[00]">
                  <Tooltip
                    text={`${newItems ? '' : 'Add sales,expenses and more'}`}
                    bg="akauntme dark:bg-akauntme-dark-2"
                  >
                    <button
                      onClick={() => addNewItems(!newItems)}
                      className="border dark:border-gray-500 shadow-sm gap-x-2 px-2 py-1 rounded-lg flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className={`${
                          newItems ? 'rotate-45' : ''
                        } transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                      >
                        <path d="M23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5L22.5 22.5L6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5L22.5 25.5L22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5L25.5 25.5L41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5L25.5 22.5L25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z" />
                      </svg>
                      Add new
                    </button>
                  </Tooltip>
                  <button
                    onClick={() => showItems(!items)}
                    className="border dark:border-gray-500 shadow-sm px-2 py-2 flex lg:hidden justify-center items-center rounded-lg"
                  >
                    <svg
                      className={`${
                        items ? 'rotate-180' : ''
                      } transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className={`${
                  items ? 'flex absolute z-[10] lg:relative' : 'hidden'
                } shadow-md 
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="fill-white size-6"
                    >
                      <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-x-2 my-2">
                    <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                      Total balance
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
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
                      <svg
                        className="inline-block size-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="fill-white size-6"
                    >
                      <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-x-2 my-2">
                    <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                      Total Sales
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
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
                      <svg
                        className="inline-block size-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                      <span className="inline-block text-xs sm:text-sm">
                        1.7%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-h-[450px] p-2 lg:p-4 lg:col-span-2 lg:row-span-2 overflow-x-auto overflow-y-hidden  bg-white dark:bg-akauntme-dark rounded-md border dark:border-akauntme/20 shadow-sm">
              <div className="relative">
                <h2 className="px-2.5 font-semibold">Quick Link</h2>
                <div className="flex justify-between items-center p-2 w-full gap-x-2 lg:gap-x-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={` ${
                        activeTab === index
                          ? 'border-akauntme *:text-akauntme'
                          : 'border-akauntme/10'
                      }  focus:ring-0 focus:outline-none appearance-none flex flex-col justify-center items-center group  rounded-lg shadow-lg shadow-ageno/10 h-[70px] w-full border-2  hover:border-akauntme hover:cursor-pointer lg:h-[90px] lg:w-full`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.icon}
                      <h3 className="font-semibold text-sm md:text-base group-hover:text-akauntme">
                        {tab.title}
                      </h3>
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <motion.div
                    className="absolute top-1 h-1 rounded-full bg-gradient-to-r from-akauntme/80 to-teal-500"
                    layoutId="underline"
                    style={{
                      width: `${100 / tabs.length}%`,
                      left: `${(100 / tabs.length) * activeTab}%`,
                    }}
                  ></motion.div>

                  <div className="p-4 border rounded-lg">
                    <p className="text-gray-700">
                      {tabs[activeTab]['content']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
