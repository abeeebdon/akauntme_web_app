import React from 'react'
import NoNotification from '@/components/icons/NoNotification'
import Link from 'next/link'

export default function AllArchievedWidget() {
    return (
        <div className='flex justify-center flex-col items-center h-[40vh]'>
            <NoNotification />
            <div className='flex flex-col justify-center items-center dark:text-gray-300'>
                <h1 className='mt-5 font-semibold mb-1'>No archieved notifications</h1>
                <p>
                    We&apos;ll notify you have updates and any time.
                </p>
                <Link href="/" className='py-2 mt-4 text-white dark:text-gray-400 hover:text-akauntme border border-white dark:border-gray-500 hover:border-akauntme bg-transparent hover:bg-white dark:hover:bg-akauntme-dark-2 transition-all hover:scale-95 text-sm px-2 font-semibold rounded-lg'>
                    Notification Settings
                </Link>
            </div>
        </div>
    )
}
