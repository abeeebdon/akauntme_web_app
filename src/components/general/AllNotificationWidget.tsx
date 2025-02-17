import React from 'react'
import { Tooltip } from '@/components/basics'

export default function AllNotificationWidget() {
    return (
        <div className='flex flex-col justify-between px-2 mt-5'>
            <div className='flex items-start gap-x-5 rounded-md dark:border-gray-700 shadow-md px-2 py-4 hover:cursor-pointer  hover:bg-white dark:hover:bg-akauntme-dark-2 *:hover:text-akauntme'>
                <div className='rounded-full size-10 bg-white dark:bg-akauntme-dark-2 border dark:border-gray-600 shadow-sm'></div>
                <div className='flex flex-col justify-between dark:text-gray-300'>
                    <h3 className='font-light text-sm'>2 hours ago</h3>
                    <h1 className='font-semibold text-base'>Mark Okechukwu</h1>
                    <p className='text-sm'>A new stock was added by your staff Mark Okechukwu</p>
                </div>

                <div className='flex items-center gap-x-2'>
                    <Tooltip text="Mark as read" position="left">
                        <button className='border-none outline-none focus:ring-0 focus:border-none focus:outline-none rounded-xl bg-'>
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                        </button>
                    </Tooltip>

                    <Tooltip text="Mark as read" position="left-2">
                        <button className='border-none outline-none focus:ring-0 focus:border-none focus:outline-none rounded-xl bg-'>
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
