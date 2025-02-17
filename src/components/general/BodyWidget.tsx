"use client"
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import HeaderWidget from './HeaderWidget'

interface BodyWidgetProps {
    children: ReactNode
}

const BodyWidget: React.FC<BodyWidgetProps> = ({ children }) => {
    return (
        <main className='w-full dark:bg-akauntme-dark-2 lg:w-10/12 lg:justify-end overflow-hidden'>
            <HeaderWidget />
            <div className='mb-20 px-3 pt-4 lg:px-5 dark:bg-akauntme-dark-2 text-gray-700 dark:text-neutral-400  overflow-y-auto h-[92vh] custom-scrollbar'>
                {children}
            </div>

            <motion.div
                whileHover={{ scale: 1 }}
                className='absolute cursor-pointer  flex justify-center items-center text-white bottom-10 left-[45%] lg:hidden bg-akauntme dark:bg-akauntme-dark rounded-full size-14 mx-auto'>

            </motion.div>

        </main>
    )
}

export default BodyWidget;