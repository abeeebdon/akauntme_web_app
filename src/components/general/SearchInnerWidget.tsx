"use client";
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '@/components/icons';
import Link from 'next/link';




export default function SearchInnerWidget() {

    // const suggestions = [
    //     { name: "Dashboard", url: '/' },
    //     { name: "Sales", url: '/sales' },
    //     { name: "Debts", url: '/debts' },
    //     { name: "Dates", url: '/settings' },
    //     { name: "Stocks", url: '/stocks' },
    //     { name: "Settings", url: '/settings' },
    //     { name: "Services", url: '/services' },
    //     { name: "Expenses", url: '/expenses' },
    //     { name: "Theme", url: '/settings' },
    //     { name: "Reports", url: '/reports' },
    //     { name: "Histories", url: '/history' },
    //     { name: "Profiles", url: '/profile' }
    // ];



    // const salesDatabase = [
    //     { name: "Add Sales", url: "/sales-q1" },
    //     { name: "Delete Sales", url: "/sales-q2" },
    //     { name: "Update Sales", url: "/sales-q3" },
    //     { name: "Compare Sales", url: "/sales-q4" },
    // ];

    // const debtsDatabase = [
    //     { name: "Add Debts", url: "/sales-q1" },
    //     { name: "Delete Debts", url: "/sales-q2" },
    //     { name: "Update Debts", url: "/sales-q3" },
    // ];


    // const expensesDatabase = [
    //     { name: "Add Expenses", url: "/sales-q1" },
    //     { name: "Delete Expense", url: "/sales-q2" },
    //     { name: "Update Expenses", url: "/sales-q3" },
    // ];

    // const specialSuggestions = [
    //     { name: "@sales", url: ["/sales/q1", "/sales/q2", "/sales/q3", "/sales/q4"] },
    //     { name: "@debts", url: ["/debts/q1", "/debts/q2", "/debts/q3", "/debts/q4"] },
    //     { name: "@expenses", url: ["/expenses/q1", "/expenses/q2", "/expenses/q3", "/expenses/q4"] },
    // ];



    // const [searchTerm, setSearchTerm] = useState('');
    // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [tags, setTags] = useState([]);


    // useEffect(() => {
    //     if (searchTerm === '') {
    //         setFilteredSuggestions([]);
    //     }
    //     else if (searchTerm.startsWith('@')) {
    //         setFilteredSuggestions(
    //             specialSuggestions.filter(suggestion =>
    //                 suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
    //             )
    //         )
    //     }
    //     else if (searchTerm.toLowerCase() === '@sale') {
    //         setSearchTerm('@sale');
    //         setFilteredSuggestions(salesDatabase);
    //     }
    //     else if (searchTerm.toLowerCase() === '@debt') {
    //         setSearchTerm('@debt');
    //         setFilteredSuggestions(debtsDatabase);
    //     }
    //     else if (searchTerm.toLowerCase() === '@expense') {
    //         setSearchTerm('@expense');
    //         setFilteredSuggestions(expensesDatabase);
    //     }
    //     else {
    //         setFilteredSuggestions(
    //             suggestions.filter(suggestion =>
    //                 suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
    //             )
    //         );
    //     }
    // }, [searchTerm]);


    // return (
    //     // <>
    //     //     <div className='w-full relative md:w-[350px] lg:w-[500px] md:block'>
    //     //         <div className='shadow-sm flex item-center w-full bg-white dark:bg-akauntme-dark-2 border dark:border-akauntme/20 focus:ring-2 focus:ring-blue-500 rounded-lg px-2 h-10'>
    //     //             <div className='flex justify-center items-center w-[6%] lg:w-[10%] relative before:absolute before:content-[""] before:right-0 before:w-[0.5px] before:h-7 before:bg-gray-300 dark:before:bg-neutral-500 '>
    //     //                 <SearchIcon className="size-5 lg:size-6 fill-gray-400 dark:fill-gray-300" />
    //     //             </div>

    //     //             <input
    //     //                 value={searchTerm}
    //     //                 onChange={(e) => setSearchTerm(e.target.value)}
    //     //                 placeholder='Search your Sales, Expenses...'
    //     //                 className='w-[94%] lg:w-[90%] placeholder:text-gray-400 dark:text-gray-300 border-none outline-none focus:ring-0 focus:border-none focus:outline-none dark:bg-akauntme-dark-2 appearance-none ' />
    //     //         </div>

    //     //         {filteredSuggestions.length > 0 && (
    //     //             <motion.ul
    //     //                 className="dark:text-gray-300 absolute py-6 left-0 right-0 p-4 bg-gray-100 dark:bg-akauntme-dark mt-3 overflow-y-auto min-h-10 border shadow-md rounded-md border-transparent w-full custom-scrollbar">
    //     //                 <AnimatePresence>
    //     //                     {filteredSuggestions.map((suggestion, index) => (
    //     //                         <motion.li key={index}
    //     //                             initial={{ opacity: 0, y: -10 }}
    //     //                             animate={{ opacity: 1, y: 0 }}
    //     //                             exit={{ opacity: 0, y: -10 }}
    //     //                             transition={{ duration: 0.2 }}
    //     //                             className='w-full'

    //     //                         >
    //     //                             <Link href={suggestion.url} passHref
    //     //                                 className={`${index !== filteredSuggestions.length - 1 ? 'before:content-[""] before:absolute before:w-full before:bg-gray-50 dark:before:bg-neutral-500/10 before:h-[0.5px] before:bottom-0 before:left-0' : ''} relative scale-100 hover:scale-105 transition-all 
    //     //                             dark:hover:bg-akauntme-dark-2 rounded-md hover:bg-white cursor-pointer w-full block p-2`}
    //     //                             >{suggestion.name}</Link>
    //     //                         </motion.li>
    //     //                     ))}
    //     //                 </AnimatePresence>
    //     //             </motion.ul>
    //     //         )}

    //     //     </div>

    //     // </>


    // )

    return <>
        Search Bar
    </>
}
