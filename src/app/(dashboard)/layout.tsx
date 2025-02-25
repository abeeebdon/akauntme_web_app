'use client'
import { useState, useEffect, ReactNode } from 'react'

import { FooterNavbarWidget } from '@/components/general'
import Sidebar from '@/components/general/Sidebar'
import Header from '@/components/general/Header'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  useEffect(() => {
    document.body.className = 'overflow-hidden'
  }, [])
  const toggleSidebar = () => {
    const newState = !isExpanded
    setIsExpanded(newState)
    localStorage.setItem('isAkauntmeExpanded', JSON.stringify(newState))
  }

  useEffect(() => {
    const storedState = localStorage.getItem('isAkauntmeExpanded')
    if (storedState !== null) {
      setIsExpanded(JSON.parse(storedState))
    }
  }, [])

  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={` ${
          isExpanded ? 'w-full lg:w-[86%]' : 'w-full lg:w-[95%]'
        } bg-white overflow-y-auto h-screen `}
      >
        <div className="mb-20  dark:bg-akauntme-dark-2 text-gray-700 dark:text-neutral-400">
          <Header />
          <div className="px-3  lg:px-5">{children}</div>
        </div>
        <div className="absolute flex flex-col justify-center items-center left-[42%] lg:left-[92%] z-[1000] bottom-10 lg:bottom-10 ">
          <div className="h-8 hidden mx-10 lg:block">
            <svg
              className="size-12"
              viewBox="0 0 20 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.02415 5C8.00414 5 7.98413 4.9895 7.96412 4.97899C7.9341 4.95798 7.91409 4.90546 7.9241 4.86345L8.20981 3.74542C8.30437 3.37539 8.1799 2.9838 7.88904 2.73628L7.12839 2.08894C7.07206 2.041 6.99433 1.99474 7.00047 1.92102C7.00103 1.91429 7.00209 1.90765 7.00361 1.90126C7.01361 1.85924 7.05364 1.82773 7.09366 1.82773L8.13688 1.76975C8.53593 1.74757 8.88346 1.48991 9.02064 1.11452L9.36777 0.16458C9.39244 0.0970734 9.41961 0.014202 9.49032 0.00134975C9.49517 0.000468987 9.50005 0 9.50493 0C9.54495 0 9.58497 0.0315126 9.59498 0.0630252L9.97922 1.11452C10.1164 1.48991 10.4639 1.74757 10.863 1.76975L11.9062 1.82773C11.9462 1.82773 11.9862 1.85924 11.9962 1.90126C12.0063 1.94328 11.9962 1.98529 11.9662 2.01681L11.1208 2.73628C10.83 2.9838 10.7055 3.37539 10.8001 3.74542L11.0858 4.86345C11.0958 4.90546 11.0858 4.94748 11.0457 4.97899C11.0427 4.9811 11.0395 4.9831 11.0361 4.98497C10.9732 5.01977 10.9056 4.95868 10.846 4.9184L10.0647 4.39066C9.72646 4.16224 9.2834 4.16224 8.94521 4.39066L8.12109 4.94731C8.0899 4.96837 8.06178 5 8.02415 5Z"
                fill="#3EA1C7"
              />
              <path
                d="M0.867728 6.90448C0.858349 6.90448 0.84897 6.89956 0.839591 6.89464C0.825522 6.88479 0.816142 6.86017 0.820832 6.84048L0.872653 6.6377C0.967216 6.26766 0.842749 5.87608 0.551891 5.62855L0.455023 5.54611C0.423867 5.5196 0.37991 5.49186 0.389387 5.45206C0.394076 5.43237 0.412835 5.4176 0.431593 5.4176L0.571153 5.40984C0.970208 5.38766 1.31773 5.13 1.45491 4.75461L1.49514 4.64452C1.50827 4.60858 1.52353 4.56091 1.56179 4.56091C1.58055 4.56091 1.59931 4.57568 1.604 4.59045L1.66399 4.75461C1.80116 5.13 2.14869 5.38766 2.54774 5.40984L2.6873 5.4176C2.70606 5.4176 2.72482 5.43237 2.72951 5.45206C2.7342 5.47176 2.72951 5.49145 2.71544 5.50622L2.57169 5.62855C2.28084 5.87608 2.15637 6.26766 2.25093 6.6377L2.30275 6.84048C2.30744 6.86017 2.30275 6.87987 2.28399 6.89464C2.25347 6.916 2.21684 6.88412 2.18597 6.86327L2.12151 6.81974C1.78332 6.59131 1.34026 6.59131 1.00207 6.81974L0.913165 6.87979C0.898549 6.88966 0.885366 6.90448 0.867728 6.90448Z"
                fill="#3EA1C7"
              />
              <path
                d="M16.7522 6.45299C16.7375 6.45299 16.7228 6.44527 16.7081 6.43756C16.6861 6.42213 16.6714 6.38355 16.6787 6.35269L16.8475 5.6921C16.9421 5.32206 16.8176 4.93048 16.5268 4.68295L16.1055 4.32444C16.0567 4.28289 15.9878 4.23942 16.0027 4.17706C16.01 4.1462 16.0394 4.12305 16.0688 4.12305L16.6604 4.09017C17.0594 4.06799 17.4069 3.81033 17.5441 3.43494L17.7354 2.91165C17.7559 2.85534 17.7798 2.78064 17.8398 2.78064C17.8692 2.78064 17.8986 2.80378 17.9059 2.82693L18.1281 3.43494C18.2653 3.81033 18.6128 4.06799 19.0119 4.09017L19.6035 4.12305C19.6329 4.12305 19.6622 4.1462 19.6696 4.17706C19.6769 4.20792 19.6696 4.23878 19.6475 4.26192L19.1528 4.68295C18.862 4.93048 18.7375 5.32206 18.8321 5.6921L19.0009 6.35269C19.0082 6.38355 19.0009 6.41441 18.9715 6.43756C18.9237 6.47103 18.8662 6.42108 18.8179 6.3884L18.3995 6.10584C18.0613 5.87741 17.6183 5.87741 17.2801 6.10583L16.8234 6.41429C16.8005 6.42976 16.7798 6.45299 16.7522 6.45299Z"
                fill="#3EA1C7"
              />
            </svg>
          </div>

          <div className="size-12 border shadow-md shadow-akauntme/50 bg-gradient-to-tr from-teal-600 to-akauntme rounded-full flex justify-center items-center">
            <svg
              className="size-8"
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8315 4.67346C18.8315 3.84504 19.5031 3.17346 20.3315 3.17346C21.16 3.17346 21.8315 3.84503 21.8315 4.67346V12.1735H20.8315C19.727 12.1735 18.8315 11.278 18.8315 10.1735V4.67346Z"
                fill="white"
              />
              <circle
                opacity="1"
                cx="16.8315"
                cy="11.1735"
                r="1"
                fill="white"
              />
              <path
                d="M14.8316 12.4182H9.94954C9.09367 12.1133 8.48047 11.2953 8.48047 10.3339C8.48047 10.2349 8.4883 10.1359 8.50134 10.0395L9.37026 8.55975L10.701 6.29578L14.8316 12.4182Z"
                fill="white"
              />
              <path
                d="M9.91556 4.60242L6.38771 10.8551L5.9937 11.5559C5.9937 11.5559 5.98848 11.5611 5.98587 11.5637C5.55533 12.0847 4.90559 12.4182 4.17497 12.4182H0L4.96561 3.78957L5.35962 3.10178C5.35962 3.10178 5.36049 3.10091 5.36223 3.09918L7.04527 0.173462L8.84573 2.95068L9.35716 3.74268L9.91556 4.60242Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 
            className="bg-akauntme items-center flex justify-center size-14 
          rounded-full absolute mb-16 left-[42%]
            */}

      <FooterNavbarWidget />
    </div>
  )
}

/*

      <Sidebar />
    
    </div>
*/
export default MainLayout
