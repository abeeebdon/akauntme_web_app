import { useEffect } from 'react';
import { motion } from 'framer-motion';

// const ProfileWidget = ({ isVisible, onClose }) => {

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === 'Escape') {
//                 onClose();
//             }
//         };

//         if (isVisible) {
//             document.addEventListener('keydown', handleKeyDown);
//         }

//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [isVisible, onClose]);

//     if (!isVisible) return null;


//     return (
//         <motion.div
//             className="absolute right-2 z-[1000] max-w-[300px] sm:max-w-md lg:max-w-lg top-16  bg-akauntme text-white dark:text-neutral-500 dark:bg-akauntme-dark rounded-lg shadow-sm"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 100, opacity: 0 }}
//             transition={{
//                 type: "spring",
//                 stiffness: 500,
//                 damping: 30,
//             }}
//         >

//             <div className="absolute top-2 right-0 mr-4 -mt-3 size-3 bg-akauntme dark:bg-akauntme-dark transform rotate-45"></div>

//             <div className='min-w-[250px] lg:min-w-[270px] mt-5'>
//                 <div className='flex items-center justify-between lg:justify-around border-b border-gray-400 shadow-sm py-2 px-3'>
//                     <div className='size-10 rounded-full bg-white'></div>
//                     <div className='p-0 m-0'>
//                         <h1>Mark Okechukwu</h1>
//                         <span>markthavalor@gmail.com</span>
//                     </div>
//                 </div>

//                 <ul className='my-2 py-2 px-3 border-b shadow-sm border-gray-400 gap-y-1 flex flex-col'>
//                     <li className='text-sm cursor-pointer hover:bg-white hover:text-akauntme rounded-lg px-2 py-1.5 flex justify-start gap-x-5 items-center'>
//                         <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <rect width="20" height="14" x="2" y="5" rx="2"></rect>
//                             <line x1="2" x2="22" y1="10" y2="10"></line>
//                         </svg>
//                         Billing
//                     </li>


//                     <li className='text-sm cursor-pointer hover:bg-white hover:text-akauntme rounded-lg px-2 py-1.5 flex justify-start gap-x-5 items-center'>


//                         <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//                             <circle cx="12" cy="12" r="3"></circle>
//                         </svg>
//                         Settings
//                     </li>


//                     <li className='text-sm cursor-pointer hover:bg-white hover:text-akauntme rounded-lg px-2 py-1.5 flex justify-start gap-x-5 items-center'>

//                         <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                             <circle cx="12" cy="7" r="4"></circle>
//                         </svg>
//                         My account
//                     </li>
//                 </ul>


//                 <ul className='mt-2 py-2 px-3  gap-y-1 flex flex-col'>
//                     <li className='cursor-pointer hover:bg-white hover:text-akauntme rounded-lg px-2 py-1.5 flex justify-start gap-x-5 items-center'>

//                         Sign out
//                     </li>
//                 </ul>
//             </div>
//             <button
//                 className="bg-white border dark:border-neutral-600 absolute outline-none focus:outline-none top-2 right-2 text-base hover:scale-95 antialiased scale-100 transition-all dark:bg-akauntme-dark-2 text-akauntme dark:text-white size-8 flex justify-center items-center rounded-full"
//                 onClick={onClose}
//                 title='esc to close'
//             >
//                 <span className='lg:hidden'>
//                     &times;
//                 </span>
//                 <span className="hidden lg:block font-sans dark:text-neutral-400 text-xs font-semibold">
//                     esc
//                 </span>
//             </button>
//         </motion.div>
//     );
// };

const ProfileWidget = () => {
    return <>
        <h1>Profile</h1>
    </>
}

export default ProfileWidget;
