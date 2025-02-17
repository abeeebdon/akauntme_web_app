import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DarkIcon, LightIcon } from '@/components/icons';

export default function DarkModeWidget() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);


    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };



    return (
        <div className='mx-3 px-6 bg-white dark:bg-akauntme-dark-2 py-2 rounded-md'>
            <div className='flex justify-between items-center'>
                <motion.button
                    onClick={toggleDarkMode}
                    whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: {
                            delay: 0.25,
                            duration: 1,

                        }
                    }}

                    className='size-7 flex relative overflow-hidden transition-all justify-center items-center rounded-full bg-gray-100 dark:bg-akauntme-dark'>

                    <LightIcon className={`${!darkMode ? '-translate-x-8' : 'translate-x-0'} size-3.5 transition-all fill-akauntme absolute dark:fill-gray-500`} />

                    <DarkIcon className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}  size-3.5 fill-akauntme absolute dark:fill-gray-500  transition-all`} />

                </motion.button>
                <div className='text-akauntme px-2 dark:text-gray-300 leading-5 flex justify-center items-center gap-x-2'>
                    <p className='h-5'>Theme</p>
                    <motion.button
                        whileHover={{
                            rotate: 90,
                            transition: {
                                delay: 0.25
                            }
                        }}
                        title='more' className=' flex justify-center items-center size-5 rounded-full bg-akauntme dark:bg-akauntme-dark'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='fill-white size-3'>
                            <path d="M7.9980469 18.498047C4.9771871 18.498047 2.4960938 20.97914 2.4960938 24C2.4960938 27.02086 4.9771871 29.501953 7.9980469 29.501953C11.018274 29.501953 13.5 27.02086 13.5 24C13.5 20.97914 11.018274 18.498047 7.9980469 18.498047 z M 39.998047 18.498047C36.977187 18.498047 34.496094 20.97914 34.496094 24C34.496094 27.02086 36.977187 29.501953 39.998047 29.501953C43.018274 29.501953 45.5 27.02086 45.5 24C45.5 20.97914 43.018274 18.498047 39.998047 18.498047 z M 23.998047 18.5C20.97764 18.5 18.498047 20.980679 18.498047 24C18.498047 27.019774 20.978273 29.5 23.998047 29.5C27.017821 29.5 29.498047 27.019774 29.498047 24C29.498047 20.980226 27.017821 18.5 23.998047 18.5 z" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
