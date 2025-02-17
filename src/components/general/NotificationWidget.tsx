import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/basics';
import AllNotificationWidget from './AllNotificationWidget';
import AllArchievedWidget from './AllArchievedWidget';



// const Tabs = ({ tabs: }) => {
//     const [activeTab, setActiveTab] = useState(0);

//     return (
//         <div className='w-full'>
//             <div className='flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-3'>
//                 <div className="flex ">
//                     {tabs.map((tab, index) => (
//                         <button
//                             key={index}
//                             className={`px-2 py-1 flex justify-center relative -mb-px mx-1 text-sm font-normal rounded-lg ${activeTab === index
//                                 ? ' text-akauntme dark:text-gray-400 bg-white dark:bg-akauntme-dark-2 before:h-[1px] before:-bottom-2 mx-2 before:rounded-md before:left-0 before:w-full before:flex before:justify-center before:bg-white dark:before:bg-gray-600 before:content-[""] before:absolute'
//                                 : 'hover:bg-white dark:hover:bg-akauntme-dark-2 dark:hover:text-gray-400 hover:text-akauntme'
//                                 }`}
//                             onClick={() => setActiveTab(index)}
//                         >
//                             {tab.title}
//                         </button>
//                     ))}
//                 </div>

//                 <Tooltip text="Preferences">

//                     <button

//                         className='flex justify-center items-center rounded-full size-9 shadow-sm focus:border dark:focus:border-neutral-700 text-white dark:text-gray-400 focus:outline-none focus:ring-0 focus:bg-gray-100 dark:focus:bg-akauntme-dark-2 hover:bg-gray-100 dark:hover:bg-akauntme-dark-2   *:hover:text-gray-600 *:dark:hover:text-gray-400'

//                     >


//                         <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//                             <circle cx="12" cy="12" r="3"></circle>
//                         </svg>
//                     </button>
//                 </Tooltip>
//             </div>

//             <div className="overflow-y-auto h-[60vh] lg:h-[50vh] custom-scrollbar">
//                 {tabs[activeTab].content}
//             </div>
//             <footer className='border-t w-full  rounded-b-lg hover:text-akauntme flex justify-center items-center shadow-sm border-gray-200  dark:border-gray-700 px-4 py-3'>
//                 <button className='border-gray-200 px-4 py-1 hover:bg-white dark:hover:bg-akauntme-dark-2 dark:text-gray-500 rounded-full'>Mark all as read</button>
//             </footer>
//         </div>
//     );
// };



// const NotificationWidget = ({ isVisible, onClose }) => {

// const tabs = [
//     { title: 'All', content: <AllNotificationWidget /> },
//     { title: 'Archieved', content: <AllArchievedWidget /> },
// ];

// useEffect(() => {
//     const handleKeyDown = (event) => {
//         if (event.key === 'Escape') {
//             onClose();
//         }
//     };

//     if (isVisible) {
//         document.addEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//         document.removeEventListener('keydown', handleKeyDown);
//     };
// }, [isVisible, onClose]);

// if (!isVisible) return null;


// return (
//     <motion.div
//         className="absolute w-full z-[1000] mx-0 sm:max-w-md lg:max-w-md top-14 lg:top-16  bg-akauntme text-white dark:text-neutral-500 dark:bg-akauntme-dark lg:rounded-lg lg:right-[6.2rem] shadow-sm"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: 100, opacity: 0 }}
//         transition={{
//             type: "spring",
//             stiffness: 500,
//             damping: 30,
//         }}
//     >


//         <div className='w-full lg:min-w-[270px]'>
//             <Tabs tabs={tabs} />
//         </div>

//     </motion.div>
// );
// };

const NotificationWidget = () => {
    return <>
        Notification
    </>
}

export default NotificationWidget;
