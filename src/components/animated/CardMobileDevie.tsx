'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { LogoIcon } from '../icons';
import CardSmartAIWidget from './CardSmartAIWidget';

const CardMobileDevie = () => {

    const [showPopup, setShowPopup] = useState(false);


    const MobileList = [{
        customerName: "Mark David",
        amount: 1000,
        salesType: 'Debts',
        dateSold: 'Today: 1:14pm'
    },
    {
        customerName: "Chidimma Samuel",
        amount: 2000,
        salesType: 'Debited',
        dateSold: 'Today: 1:30pm'
    },

    {
        customerName: "Joshua Ebuka",
        amount: 1500,
        salesType: 'Debited',
        dateSold: 'Today: 5:30pm'
    },

    {
        customerName: "Clinton Abebanjo",
        amount: 4000,
        salesType: 'Debited',
        dateSold: 'Today: 4:30pm'
    },

    ];

    return <>
        <div className={`absolute bottom-[-300px] z-[10]`}>
            <figure className="mx-auto max-w-full w-[280px] h-auto">
                <div className="p-1.5 bg-gray-200 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-neutral-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                    <div className='max-w-[300px] h-[500px] rounded-[1.25rem] bg-white  relative overflow-hidden'>
                        <CardSmartAIWidget show={showPopup} onClose={() => setShowPopup(false)} />
                        <button
                            onClick={() => setShowPopup(true)}
                            className='outset-none absolute rounded-full p-1 right-2 bottom-[60px]'>
                            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="24.1735" r="18" fill="url(#paint0_linear_201_280)" />
                                <path d="M19.0241 5C19.0041 5 18.9841 4.9895 18.9641 4.97899C18.9341 4.95798 18.9141 4.90546 18.9241 4.86345L19.2098 3.74542C19.3044 3.37539 19.1799 2.9838 18.889 2.73628L18.1284 2.08894C18.0721 2.041 17.9943 1.99474 18.0005 1.92102C18.001 1.91429 18.0021 1.90765 18.0036 1.90126C18.0136 1.85924 18.0536 1.82773 18.0937 1.82773L19.1369 1.76975C19.5359 1.74757 19.8835 1.48991 20.0206 1.11452L20.3678 0.16458C20.3924 0.0970734 20.4196 0.014202 20.4903 0.00134975C20.4952 0.000468987 20.5 0 20.5049 0C20.545 0 20.585 0.0315126 20.595 0.0630252L20.9792 1.11452C21.1164 1.48991 21.4639 1.74757 21.863 1.76975L22.9062 1.82773C22.9462 1.82773 22.9862 1.85924 22.9962 1.90126C23.0063 1.94328 22.9962 1.98529 22.9662 2.01681L22.1208 2.73628C21.83 2.9838 21.7055 3.37539 21.8001 3.74542L22.0858 4.86345C22.0958 4.90546 22.0858 4.94748 22.0457 4.97899C22.0427 4.9811 22.0395 4.9831 22.0361 4.98497C21.9732 5.01977 21.9056 4.95868 21.846 4.9184L21.0647 4.39066C20.7265 4.16224 20.2834 4.16224 19.9452 4.39066L19.1211 4.94731C19.0899 4.96837 19.0618 5 19.0241 5Z" fill="#3EA1C7" />
                                <path d="M11.8675 6.90448C11.8581 6.90448 11.8487 6.89956 11.8393 6.89464C11.8253 6.88479 11.8159 6.86017 11.8206 6.84048L11.8724 6.6377C11.967 6.26766 11.8425 5.87608 11.5516 5.62855L11.4548 5.54611C11.4236 5.5196 11.3797 5.49186 11.3891 5.45206C11.3938 5.43237 11.4126 5.4176 11.4313 5.4176L11.5709 5.40984C11.97 5.38766 12.3175 5.13 12.4547 4.75461L12.4949 4.64452C12.508 4.60858 12.5233 4.56091 12.5615 4.56091C12.5803 4.56091 12.5991 4.57568 12.6038 4.59045L12.6637 4.75461C12.8009 5.13 13.1484 5.38766 13.5475 5.40984L13.6871 5.4176C13.7058 5.4176 13.7246 5.43237 13.7293 5.45206C13.734 5.47176 13.7293 5.49145 13.7152 5.50622L13.5714 5.62855C13.2806 5.87608 13.1561 6.26766 13.2507 6.6377L13.3025 6.84048C13.3072 6.86017 13.3025 6.87987 13.2838 6.89464C13.2532 6.916 13.2166 6.88412 13.1857 6.86327L13.1213 6.81974C12.7831 6.59131 12.34 6.59131 12.0018 6.81974L11.9129 6.87979C11.8983 6.88966 11.8851 6.90448 11.8675 6.90448Z" fill="#3EA1C7" />
                                <path d="M27.7522 6.45299C27.7375 6.45299 27.7228 6.44527 27.7081 6.43756C27.6861 6.42213 27.6714 6.38355 27.6787 6.35269L27.8475 5.6921C27.9421 5.32206 27.8176 4.93048 27.5268 4.68295L27.1055 4.32444C27.0567 4.28289 26.9878 4.23942 27.0027 4.17706C27.01 4.1462 27.0394 4.12305 27.0688 4.12305L27.6604 4.09017C28.0594 4.06799 28.4069 3.81033 28.5441 3.43494L28.7354 2.91165C28.7559 2.85534 28.7798 2.78064 28.8398 2.78064C28.8692 2.78064 28.8986 2.80378 28.9059 2.82693L29.1281 3.43494C29.2653 3.81033 29.6128 4.06799 30.0119 4.09017L30.6035 4.12305C30.6329 4.12305 30.6622 4.1462 30.6696 4.17706C30.6769 4.20792 30.6696 4.23878 30.6475 4.26192L30.1528 4.68295C29.862 4.93048 29.7375 5.32206 29.8321 5.6921L30.0009 6.35269C30.0082 6.38355 30.0009 6.41441 29.9715 6.43756C29.9237 6.47103 29.8662 6.42108 29.8179 6.3884L29.3995 6.10584C29.0613 5.87741 28.6183 5.87741 28.2801 6.10583L27.8234 6.41429C27.8005 6.42976 27.7798 6.45299 27.7522 6.45299Z" fill="#3EA1C7" />
                                <g filter="url(#filter0_di_201_280)">
                                    <circle cx="21.0001" cy="24.1734" r="15.9" fill="url(#paint1_linear_201_280)" stroke="white" strokeLinejoin="round" />
                                    <path d="M27.8315 22.6735C27.8315 21.845 28.5031 21.1735 29.3315 21.1735C30.16 21.1735 30.8315 21.845 30.8315 22.6735V30.1735H29.8315C28.727 30.1735 27.8315 29.278 27.8315 28.1735V22.6735Z" fill="white" />
                                    <circle opacity="0.2" cx="25.8315" cy="29.1735" r="1" fill="white" />
                                </g>
                                <path d="M23.8316 30.4182H18.9495C18.0937 30.1133 17.4805 29.2953 17.4805 28.3339C17.4805 28.2349 17.4883 28.1359 17.5013 28.0395L18.3703 26.5598L19.701 24.2958L23.8316 30.4182Z" fill="white" />
                                <path d="M18.9156 22.6024L15.3877 28.8551L14.9937 29.5559C14.9937 29.5559 14.9885 29.5611 14.9859 29.5637C14.5553 30.0847 13.9056 30.4182 13.175 30.4182H9L13.9656 21.7896L14.3596 21.1018C14.3596 21.1018 14.3605 21.1009 14.3622 21.0992L16.0453 18.1735L17.8457 20.9507L18.3572 21.7427L18.9156 22.6024Z" fill="white" />
                                <defs>
                                    <filter id="filter0_di_201_280" x="0.600098" y="7.77344" width="40.7998" height="40.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.388235 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_280" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_280" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.388235 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_201_280" />
                                    </filter>
                                    <linearGradient id="paint0_linear_201_280" x1="45.0561" y1="82.0504" x2="-11.5923" y2="65.4543" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0146464" stopColor="#13F287" />
                                        <stop offset="1" stopColor="#635BFF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_201_280" x1="42.9179" y1="76.9057" x2="-8.69507" y2="61.7848" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0146464" stopColor="#13F287" />
                                        <stop offset="1" stopColor="#635BFF" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </button>


                        <div className='p-2'>
                            <header className='flex justify-between items-center gap-x-2 mt-1'>
                                <div>
                                    <LogoIcon className='size-4 fill-akauntme' type='alone' />
                                </div>
                                <div className='w-full bg-gray-300/20 flex rounded-md shadow-sm text-xs py-1 px-1 gap-x-2'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className='size-4 fill-gray-400'>
                                            <path d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z" />
                                        </svg>
                                    </div>
                                    <div className='text-gray-500 text-[10px]'>Search sales, customers ...</div>
                                </div>
                                <div className='flex items-center gap-x-1 justify-between text-[10px]'>
                                    <div className='rounded-full size-5 bg-akauntme flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-3 fill-white'>
                                            <path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.035294 28 8 30.035294 8 32.5L8 33.699219C8 36.640523 9.8723857 39.275984 12.71875 41.089844C15.565114 42.903703 19.455814 44 24 44C28.544186 44 32.434886 42.903703 35.28125 41.089844C38.127614 39.275984 40 36.640523 40 33.699219L40 32.5C40 30.035294 37.964706 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.435294 31 37 31.564706 37 32.5L37 33.699219C37 35.357914 35.921604 37.124406 33.667969 38.560547C31.414333 39.996687 28.055814 41 24 41C19.944186 41 16.585667 39.996687 14.332031 38.560547C12.078396 37.124406 11 35.357914 11 33.699219L11 32.5C11 31.564706 11.564706 31 12.5 31 z" />
                                        </svg>
                                    </div>
                                </div>
                            </header>


                            <div className='bg-white shadow-sm shadow-akauntme-2/10 mt-2 rounded-md p-2'>
                                <div className='flex justify-between py-2 items-center'>
                                    <div className='font-semibold items-center text-sm whitespace-nowrap flex'>Hi
                                        <svg className="size-4 animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><radialGradient id="_wXmwjLRgWCyUTMY3_U~wa" cx="25.719" cy="24.341" r="21.828" gradientTransform="rotate(-45.001 20.479 24)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe16e" /><stop offset=".629" stopColor="#ffd226" /><stop offset=".75" stopColor="#fdcd23" /><stop offset=".899" stopColor="#f6bd1b" /><stop offset=".999" stopColor="#f0af13" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wa)" d="M40.224,7.099c-2.299,0.943-2.951,3.759-3.193,6.232c0,0-0.348,2.78-0.632,4.024c-0.68,2.985-2.778,1.331-3.779,0.343c0,0-10.411-9.762-10.503-9.85c-0.747-0.786-1.701-1.267-2.553-1.286c-0.532-0.012-0.992,0.154-1.331,0.479c-0.896,0.922-0.639,2.603,0.613,3.919l9.08,10.229C23.14,16.609,15.211,9.048,15.152,8.991c-1.302-1.283-3.016-1.588-3.908-0.696c-0.002,0.002-0.004,0.004-0.007,0.007c-0.33,0.335-0.503,0.793-0.5,1.325c0.006,0.853,0.47,1.816,1.221,2.554l11.716,13.226C19.69,21.699,12.17,14.743,12.076,14.655c-1.316-1.251-3.025-1.533-3.908-0.649c-0.008,0.008-0.015,0.015-0.023,0.023c-0.326,0.339-0.492,0.8-0.48,1.332c0.019,0.851,0.5,1.806,1.274,2.543l11.837,11.979c-2.514-2.116-8.93-7.403-9.006-7.468c-1.388-1.193-3.109-1.389-3.968-0.445c-0.312,0.353-0.459,0.818-0.424,1.348c0.057,0.847,0.584,1.775,1.377,2.455c0,0,7.452,7.741,8.318,8.84c0.928,1.178,1.954,2.332,3.053,3.425c2.458,2.445,5.162,4.496,7.819,5.932c2.683,1.449,6.072,0.955,8.242-1.204l7.782-7.755c1.919-2.094,2.71-5.528,2.065-8.961c-0.039-0.205-3.046-17.38-3.046-17.38C42.795,7.373,41.437,6.601,40.224,7.099z" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wb" x1="-771.446" x2="-765.735" y1="-225.156" y2="-225.156" gradientTransform="matrix(-.8893 .0278 .0312 .9995 -636.56 260.64)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd844" /><stop offset=".539" stopColor="#f0af13" /><stop offset=".999" stopColor="#ffd94a" /></linearGradient><radialGradient id="_wXmwjLRgWCyUTMY3_U~wc" cx="-668.599" cy="-160.256" r="4.385" gradientTransform="matrix(-1.1364 .084 .1189 1.6093 -702.166 342.296)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wc)" d="M33.011,28.655c0.327,4.431,3.076,7.839,6.14,7.613c3.064-0.226,5.282-4.002,4.954-8.433s-3.076-7.839-6.14-7.613S32.683,24.224,33.011,28.655z" opacity=".49" /><radialGradient id="_wXmwjLRgWCyUTMY3_U~wd" cx="-926.987" cy="231.629" r="4.385" gradientTransform="matrix(-.3908 .9047 1.4327 .6188 -664.943 733.832)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wd)" d="M27.265,42.916c3.945,1.704,7.997,1.108,9.05-1.331c1.054-2.439-1.29-5.798-5.235-7.502c-3.945-1.704-7.997-1.108-9.05,1.331S23.32,41.212,27.265,42.916z" opacity=".37" /><radialGradient id="_wXmwjLRgWCyUTMY3_U~we" cx="-1441.561" cy="89.886" r="4.385" gradientTransform="matrix(-.3455 .328 1.462 1.5401 -610.312 350.761)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~we)" d="M17.47,17.992c4.025,4.24,8.044,6.961,8.975,6.077c0.931-0.884-1.577-5.039-5.602-9.279s-8.044-6.961-8.975-6.077C10.936,9.597,13.445,13.751,17.47,17.992z" opacity=".58" /><radialGradient id="_wXmwjLRgWCyUTMY3_U~wf" cx="-1479.367" cy="98.487" r="4.385" gradientTransform="matrix(-.3179 .3179 1.4524 1.4524 -597.755 348.573)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wf)" d="M14.058,22.841c3.999,3.999,7.936,6.546,8.793,5.689s-1.69-4.794-5.689-8.793s-7.936-6.546-8.793-5.689S10.059,18.842,14.058,22.841z" opacity=".35" /><radialGradient id="_wXmwjLRgWCyUTMY3_U~wg" cx="-1482.725" cy="96.76" r="4.385" gradientTransform="matrix(-.3019 .3304 1.1365 1.0384 -543.787 416.922)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wg)" d="M12.396,29.057c3.129,2.859,6.326,4.455,7.14,3.564c0.814-0.891-1.063-3.931-4.192-6.79s-6.326-4.455-7.14-3.564S9.267,26.197,12.396,29.057z" opacity=".36" /><radialGradient id="_wXmwjLRgWCyUTMY3_U~wh" cx="-1563.676" cy="63.252" r="4.385" gradientTransform="matrix(-.3055 .29 1.1681 1.2305 -526.033 390.052)" gradientUnits="userSpaceOnUse"><stop offset=".425" stopColor="#ffe16e" /><stop offset="1" stopColor="#ffe16e" stopOpacity="0" /></radialGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wh)" d="M23.993,15.889c3.216,3.388,6.491,5.501,7.315,4.719s-1.116-4.162-4.332-7.55s-6.491-5.501-7.315-4.719C18.837,9.12,20.777,12.501,23.993,15.889z" opacity=".56" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wi" x1="31.177" x2="19.432" y1="18.666" y2="21.922" gradientTransform="rotate(-43.406 32.537 13.43)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffdc58" stopOpacity="0" /><stop offset="1" stopColor="#f5c02c" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wi)" d="M34.664,19.954c0,0-5.46,3.067-7.743,11.028c-0.217,0.835,0.425,1.228,0.79,0.437c0.366-0.79,2.731-7.732,7.343-10.95C35.866,19.814,34.664,19.954,34.664,19.954z" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wj" x1="11.906" x2="32.491" y1="27.485" y2="27.038" gradientTransform="rotate(-45.001 20.479 24)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f9c41e" /><stop offset=".605" stopColor="#f6c12d" /><stop offset=".999" stopColor="#ffd532" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wj)" d="M31.379,17.903c0,0-7.652,3.851-13.899,13.972c-0.63,1.062-0.074,1.569,0.705,0.566c0.78-1.003,6.656-9.825,13.405-13.877C32.82,17.736,31.379,17.903,31.379,17.903z" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wk" x1="4.248" x2="10.674" y1="26.896" y2="32.896" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f1f7fe" stopOpacity="0" /><stop offset=".52" stopColor="#3c8af0" /><stop offset="1" stopColor="#f1f7fe" stopOpacity="0" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wk)" d="M10.136,32.529c-0.049,0-0.098-0.007-0.146-0.022c-2.94-0.893-5.078-3.099-5.445-5.62 c-0.04-0.273,0.149-0.527,0.423-0.567c0.287-0.033,0.526,0.15,0.566,0.423c0.313,2.139,2.175,4.026,4.746,4.807 c0.265,0.08,0.414,0.359,0.333,0.624C10.548,32.39,10.35,32.529,10.136,32.529z" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wl" x1=".792" x2="9.814" y1="27.72" y2="35.719" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f1f7fe" stopOpacity="0" /><stop offset=".52" stopColor="#3c8af0" /><stop offset="1" stopColor="#f1f7fe" stopOpacity="0" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wl)" d="M9.763,35.904c-0.049,0-0.098-0.007-0.146-0.022c-4.521-1.373-7.807-4.752-8.368-8.61 c-0.04-0.273,0.149-0.527,0.423-0.567c0.289-0.033,0.526,0.15,0.566,0.423c0.507,3.476,3.517,6.537,7.669,7.798 c0.265,0.08,0.414,0.359,0.333,0.624C10.175,35.765,9.977,35.904,9.763,35.904z" /><linearGradient id="_wXmwjLRgWCyUTMY3_U~wm" x1="25.38" x2="30.902" y1="5.756" y2="11.054" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f1f7fe" stopOpacity="0" /><stop offset=".52" stopColor="#3c8af0" /><stop offset="1" stopColor="#f1f7fe" stopOpacity="0" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wm)" d="M30.628,12.036c-0.214,0-0.412-0.139-0.478-0.355c-0.781-2.571-2.668-4.435-4.808-4.747 c-0.273-0.04-0.463-0.294-0.423-0.567c0.039-0.273,0.297-0.456,0.566-0.423c2.521,0.368,4.728,2.505,5.62,5.446 c0.081,0.264-0.068,0.543-0.333,0.624C30.726,12.029,30.677,12.036,30.628,12.036z" /><g><linearGradient id="_wXmwjLRgWCyUTMY3_U~wn" x1="25.828" x2="34.221" y1="2.45" y2="10.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f1f7fe" stopOpacity="0" /><stop offset=".52" stopColor="#3c8af0" /><stop offset="1" stopColor="#f1f7fe" stopOpacity="0" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wn)" d="M33.937,11.724c-0.214,0-0.412-0.139-0.478-0.355c-1.261-4.152-4.322-7.162-7.798-7.669 c-0.273-0.04-0.463-0.294-0.423-0.567c0.039-0.273,0.295-0.454,0.566-0.423c3.858,0.563,7.238,3.847,8.61,8.368 c0.081,0.264-0.068,0.543-0.333,0.624C34.035,11.716,33.986,11.724,33.937,11.724z" /></g><linearGradient id="_wXmwjLRgWCyUTMY3_U~wo" x1="40.485" x2="31.461" y1="29.933" y2="41.682" gradientTransform="rotate(-45.001 22.66 34.156)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffdb53" stopOpacity="0" /><stop offset=".605" stopColor="#f6c02d" /><stop offset=".999" stopColor="#f2b416" stopOpacity=".636" /></linearGradient><path fill="url(#_wXmwjLRgWCyUTMY3_U~wo)" d="M33.273,19.054c-0.868,1.648-1.472,3.514-1.748,5.465c-0.169,1.198-0.217,2.437-0.129,3.654c0.148,2.04,0.682,4.112,1.675,5.918c0.336,0.61,0.732,1.186,1.176,1.722c0.405,0.489,0.902,1.157,1.478,1.451c0.149,0.104,0.32,0.173,0.503,0.173c0.159,0,0.318-0.056,0.427-0.175c0.009-0.01,0.018-0.02,0.026-0.031c0.211-0.27,0.113-0.698-0.243-0.971c-2.914-2.296-4.364-6.826-3.694-11.567c0.275-1.944,0.902-3.789,1.799-5.388L33.273,19.054z" /></svg>
                                        &nbsp;Mark</div>
                                    <div>
                                        <button className='outset-none bg-akauntme justify-around rounded-md py-1 px-1 w-14 flex items-center gap-x-1'>
                                            <span className='text-[10px] text-white'>Week</span>
                                            <span>
                                                <svg className='size-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                                    <path d="M6.414063 7.585938L3.585938 10.414063L13 19.828125L22.414063 10.414063L19.585938 7.585938L13 14.171875Z" fill="#ECE8E8" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col h-[110px] gap-y-2">
                                    <div className='h-[70px] bg-akauntme rounded-lg items-center flex'>
                                        <div className='bg-[#00499C] w-8 flex justify-center rounded-r-md py-1'>

                                            <svg className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                <path d="M10.5 6C8.0324991 6 6 8.0324991 6 10.5L6 37.5C6 39.985 8.015 42 10.5 42L37.5 42C39.985 42 42 39.985 42 37.5L42 16.5C42 14.015 39.985 12 37.5 12L10.5 12C9.672 12 9 11.328 9 10.5C9 9.6535009 9.6535009 9 10.5 9L35.5 9 A 1.50015 1.50015 0 1 0 35.5 6L10.5 6 z M 33.5 24C34.881 24 36 25.119 36 26.5C36 27.881 34.881 29 33.5 29C32.119 29 31 27.881 31 26.5C31 25.119 32.119 24 33.5 24 z" />
                                            </svg>
                                        </div>

                                        <div className='text-white ml-5'>
                                            <h2 className='text-xs'>Net sales</h2>
                                            <h1 className='text-sm'>&#8358;100,000.00</h1>
                                        </div>

                                        <div className='ml-8'>
                                            <svg className='size-12' width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            <svg className='size-8' width="74" height="69" viewBox="0 0 74 69" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <div className='flex gap-x-2 justify-between items-center'>
                                        <div className='w-[50%] bg-akauntme-2 h-[50px] rounded-md flex items-center overflow-hidden'>
                                            <div className=''>
                                                <svg className='size-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                    <path d="M43.367 22.005c-1.026 0-2.152.675-4.546 1.917-1.983 1.03-3.817 2.009-4.982 2.723C33.94 27.083 34 27.537 34 28.005c0 3.309-2.692 6-6 6h-7.5c-.828 0-1.5-.671-1.5-1.5 0-.829.672-1.5 1.5-1.5H28c1.654 0 3-1.346 3-3 0-.897-.404-1.694-1.03-2.245-.711-.47-1.555-.755-2.47-.755h-4.393H22.5c-.029 0-.056-.007-.085-.009-2.636-.041-3.902-.313-5.015-.558-1.012-.223-1.968-.433-3.573-.433-7.332 0-11.518 9.001-11.692 9.384-.226.496-.165 1.074.158 1.512l7 9.494C9.578 44.782 10.027 45 10.497 45c.095 0 .189-.009.284-.027.566-.108 1.024-.536 1.171-1.093.079-.295.843-2.875 3.548-2.875 1.952 0 3.971.252 5.924.495 1.989.249 4.047.505 6.076.505 2.763 0 4.752-2.119 10.5-8 7.302-7.471 8-8.124 8-9.605C46 23.118 44.875 22.005 43.367 22.005L43.367 22.005zM37 9c0 2.13-1.33 3.94-3.2 4.67-.71-3.22-3.25-5.76-6.47-6.47C28.06 5.33 29.87 4 32 4 34.76 4 37 6.24 37 9zM25.5 9A6.5 6.5 0 1025.5 22 6.5 6.5 0 1025.5 9z" />
                                                </svg>
                                            </div>
                                            <div className='flex flex-col text-white items-center ml-1 whitespace-nowrap'>
                                                <p className='text-[10px]'>Total Income</p>
                                                <p className='text-xs'>
                                                    &#8358; 50,000.00
                                                </p>

                                            </div>
                                            <div className=''>
                                                <svg className='' width="82" height="69" viewBox="0 0 82 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.20855 40.7886C9.82884 40.0138 11.0802 40.3949 11.0297 41.3432L10.9893 42.1C10.9716 42.4322 11.132 42.7402 11.415 42.9175L11.8211 43.1718C12.6738 43.7058 12.1634 45.0166 11.1198 44.9731L10.6227 44.9524C10.2764 44.9379 9.93562 45.0933 9.71828 45.3648L9.22329 45.9831C8.603 46.7579 7.35164 46.3768 7.40218 45.4285L7.44251 44.6717C7.46022 44.3395 7.29985 44.0315 7.01687 43.8542L6.61077 43.5999C5.75808 43.0659 6.2684 41.7551 7.31204 41.7986L7.80909 41.8193C8.15544 41.8338 8.49622 41.6784 8.71356 41.4069L9.20855 40.7886Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M48.2078 55.8795C48.8281 55.1047 50.0795 55.4858 50.0289 56.4341L49.9886 57.1909C49.9709 57.5232 50.1313 57.8312 50.4142 58.0084L50.8203 58.2627C51.673 58.7967 51.1627 60.1076 50.1191 60.064L49.622 60.0433C49.2757 60.0289 48.9349 60.1843 48.7175 60.4558L48.2226 61.074C47.6023 61.8488 46.3509 61.4678 46.4014 60.5194L46.4418 59.7627C46.4595 59.4304 46.2991 59.1224 46.0161 58.9452L45.61 58.6909C44.7574 58.1569 45.2677 56.846 46.3113 56.8895L46.8084 56.9103C47.1547 56.9247 47.4955 56.7693 47.7128 56.4978L48.2078 55.8795Z" fill="url(#paint0_linear_201_59)" />
                                                    <path d="M65.2265 19.9995C65.8759 19.0799 67.3314 19.6033 67.0686 20.6619L66.0721 24.6756C65.9784 25.053 66.1241 25.4325 66.4444 25.645L71.4173 28.9459C72.3262 29.5491 71.5773 30.9542 70.4824 30.7L65.0751 29.4451C64.6523 29.347 64.192 29.5213 63.9333 29.8776L61.0096 33.9039C60.3344 34.8337 58.8632 34.2489 59.1894 33.1803L60.5 28.8881C60.6297 28.4632 60.4506 28.0275 60.0614 27.8212L54.8176 25.0417C53.8425 24.5248 54.4607 23.0618 55.5858 23.2236L61.6003 24.0885C62.0061 24.1469 62.4258 23.9653 62.6637 23.6284L65.2265 19.9995Z" fill="url(#paint1_linear_201_59)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_201_59" x1="50.1905" y1="53.403" x2="47.0271" y2="63.7903" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#42ABFA" />
                                                            <stop offset="1" stopColor="#0070F0" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_201_59" x1="68.3209" y1="15.6178" x2="59.5674" y2="39.5159" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#42ABFA" />
                                                            <stop offset="1" stopColor="#0070F0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className='w-[50%] bg-akauntme-2 h-[50px] rounded-md flex items-center overflow-hidden'>
                                            <div className=''>
                                                <svg className='size-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                    <path d="M41,9H7c-2.21,0-4,1.79-4,4v22c0,2.21,1.79,4,4,4h34c2.21,0,4-1.79,4-4V13C45,10.79,43.21,9,41,9z M22.5,34 c-2.25,0-3.85-1.08-4.8-1.72c-0.04-0.03-0.08-0.05-0.12-0.08c-0.21,0.15-0.45,0.33-0.64,0.48C15.71,33.61,15.18,34,14.51,34h-0.04 c-1.22-0.03-1.68-1.15-2.09-2.14c-0.05-0.11-0.11-0.25-0.17-0.4C12.09,31.7,12,32.04,12,32.5c0,0.83-0.67,1.5-1.5,1.5 S9,33.33,9,32.5c0-2.78,1.82-4.5,3.5-4.5c1.38,0,2.04,1.28,2.51,2.38c0.04-0.04,0.08-0.07,0.12-0.1c1.2-0.9,1.7-1.28,2.37-1.28 c0.7,0,1.25,0.37,1.88,0.79C20.17,30.33,21.17,31,22.5,31c0.83,0,1.5,0.67,1.5,1.5C24,33.33,23.33,34,22.5,34z M9,22.5 c0-0.83,0.67-1.5,1.5-1.5h8c0.83,0,1.5,0.67,1.5,1.5c0,0.83-0.67,1.5-1.5,1.5h-8C9.67,24,9,23.33,9,22.5z M22.5,18h-12 C9.67,18,9,17.33,9,16.5c0-0.83,0.67-1.5,1.5-1.5h12c0.83,0,1.5,0.67,1.5,1.5C24,17.33,23.33,18,22.5,18z M35.5,30.92v0.58 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5v-0.54c-1.7-0.2-2.83-1.27-3.34-2.29c-0.37-0.74-0.07-1.64,0.67-2.01 s1.64-0.07,2.01,0.67c0.06,0.11,0.38,0.67,1.2,0.67h1.71c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-1.23 c-2.34,0-4.25-1.91-4.25-4.25c0-1.93,1.4-3.59,3.23-4.08V16.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v0.61 c1.26,0.27,2.25,1.03,2.84,2.22c0.37,0.74,0.07,1.64-0.67,2.01s-1.64,0.07-2.01-0.67c-0.17-0.35-0.44-0.67-1.2-0.67h-0.84 c-0.72,0-1.35,0.58-1.35,1.25c0,0.69,0.56,1.25,1.25,1.25h1.23c2.34,0,4.25,1.91,4.25,4.25C39,28.84,37.49,30.57,35.5,30.92z" />
                                                </svg>
                                            </div>
                                            <div className='flex flex-col text-white items-center ml-1 whitespace-nowrap'>
                                                <p className='text-[10px]'>Total Expenses</p>
                                                <p className='text-xs'>
                                                    &#8358; 20,000.00
                                                </p>

                                            </div>
                                            <div className=''>
                                                <svg className='' width="82" height="69" viewBox="0 0 82 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.20855 40.7886C9.82884 40.0138 11.0802 40.3949 11.0297 41.3432L10.9893 42.1C10.9716 42.4322 11.132 42.7402 11.415 42.9175L11.8211 43.1718C12.6738 43.7058 12.1634 45.0166 11.1198 44.9731L10.6227 44.9524C10.2764 44.9379 9.93562 45.0933 9.71828 45.3648L9.22329 45.9831C8.603 46.7579 7.35164 46.3768 7.40218 45.4285L7.44251 44.6717C7.46022 44.3395 7.29985 44.0315 7.01687 43.8542L6.61077 43.5999C5.75808 43.0659 6.2684 41.7551 7.31204 41.7986L7.80909 41.8193C8.15544 41.8338 8.49622 41.6784 8.71356 41.4069L9.20855 40.7886Z" fill="white" fillOpacity="0.5" />
                                                    <path d="M48.2078 55.8795C48.8281 55.1047 50.0795 55.4858 50.0289 56.4341L49.9886 57.1909C49.9709 57.5232 50.1313 57.8312 50.4142 58.0084L50.8203 58.2627C51.673 58.7967 51.1627 60.1076 50.1191 60.064L49.622 60.0433C49.2757 60.0289 48.9349 60.1843 48.7175 60.4558L48.2226 61.074C47.6023 61.8488 46.3509 61.4678 46.4014 60.5194L46.4418 59.7627C46.4595 59.4304 46.2991 59.1224 46.0161 58.9452L45.61 58.6909C44.7574 58.1569 45.2677 56.846 46.3113 56.8895L46.8084 56.9103C47.1547 56.9247 47.4955 56.7693 47.7128 56.4978L48.2078 55.8795Z" fill="url(#paint0_linear_201_59)" />
                                                    <path d="M65.2265 19.9995C65.8759 19.0799 67.3314 19.6033 67.0686 20.6619L66.0721 24.6756C65.9784 25.053 66.1241 25.4325 66.4444 25.645L71.4173 28.9459C72.3262 29.5491 71.5773 30.9542 70.4824 30.7L65.0751 29.4451C64.6523 29.347 64.192 29.5213 63.9333 29.8776L61.0096 33.9039C60.3344 34.8337 58.8632 34.2489 59.1894 33.1803L60.5 28.8881C60.6297 28.4632 60.4506 28.0275 60.0614 27.8212L54.8176 25.0417C53.8425 24.5248 54.4607 23.0618 55.5858 23.2236L61.6003 24.0885C62.0061 24.1469 62.4258 23.9653 62.6637 23.6284L65.2265 19.9995Z" fill="url(#paint1_linear_201_59)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_201_59" x1="50.1905" y1="53.403" x2="47.0271" y2="63.7903" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#42ABFA" />
                                                            <stop offset="1" stopColor="#0070F0" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_201_59" x1="68.3209" y1="15.6178" x2="59.5674" y2="39.5159" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#42ABFA" />
                                                            <stop offset="1" stopColor="#0070F0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='bg-white mt-5 rounded-md h-[50px] whitespace-nowrap flex justify-between items-center'>
                                <div className='shadow-sm shadow-akauntme/15 rounded-lg  size-10 p-2 flex flex-col gap-y-1 justify-center items-center'>
                                    <div>
                                        <svg className='size-4' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9999 3.8965V0.5C17.9999 0.224 17.7759 0 17.4999 0H14.1034C13.8809 0 13.7689 0.2695 13.9264 0.427L17.5729 4.0735C17.7304 4.2305 17.9999 4.119 17.9999 3.8965Z" fill="#007AD9" />
                                            <path d="M21.5 19.5H0.5C0.224 19.5 0 19.276 0 19V10C0 9.724 0.224 9.5 0.5 9.5H21.5C21.776 9.5 22 9.724 22 10V19C22 19.276 21.776 19.5 21.5 19.5Z" fill="#61E3A7" />
                                            <path d="M2.5 9.5V19.5H19.5V9.5H2.5ZM8.5 18C6.567 18 5 16.433 5 14.5C5 12.567 6.567 11 8.5 11C10.433 11 12 12.567 12 14.5C12 16.433 10.433 18 8.5 18ZM17.75 18C17.336 18 17 17.664 17 17.25C17 16.836 17.336 16.5 17.75 16.5C18.164 16.5 18.5 16.836 18.5 17.25C18.5 17.664 18.164 18 17.75 18ZM15.75 18C15.336 18 15 17.664 15 17.25C15 16.836 15.336 16.5 15.75 16.5C16.164 16.5 16.5 16.836 16.5 17.25C16.5 17.664 16.164 18 15.75 18Z" fill="#33C481" />
                                            <path d="M11.2931 6.70697L8.50012 3.91397L5.56063 6.85347C5.36513 7.04897 5.04862 7.04897 4.85362 6.85347L4.14662 6.14647C3.95112 5.95097 3.95112 5.63447 4.14662 5.43947L7.79313 1.79297C8.18363 1.40247 8.81662 1.40247 9.20712 1.79297L12.0001 4.58597L15.2931 1.29297L16.7071 2.70697L12.7071 6.70697C12.3166 7.09747 11.6836 7.09747 11.2931 6.70697Z" fill="#007AD9" />
                                        </svg>
                                    </div>

                                    <p className='text-[10px] text-akauntme'>
                                        Sales
                                    </p>


                                </div>
                                <div className='shadow-sm shadow-akauntme/15 rounded-lg size-10 p-2 flex flex-col gap-y-1 justify-center items-center'>
                                    <div>



                                        <svg className='size-4' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.6247 10.0831H1.37507C1.12208 10.0831 0.916748 9.87779 0.916748 9.6248V0.458324C0.916748 0.205329 1.12208 0 1.37507 0H20.6247C20.8777 0 21.083 0.205329 21.083 0.458324V9.6248C21.083 9.87779 20.8777 10.0831 20.6247 10.0831Z" fill="#52BF8D" />
                                            <path d="M3.20825 0V10.0831H18.7913V0H3.20825ZM10.0831 8.70815C8.05823 8.70815 6.41652 7.06644 6.41652 5.04156C6.41652 3.01669 8.05823 1.37497 10.0831 1.37497C12.108 1.37497 13.7497 3.01669 13.7497 5.04156C13.7497 7.06644 12.108 8.70815 10.0831 8.70815ZM17.6454 8.70815C17.266 8.70815 16.958 8.40016 16.958 8.02067C16.958 7.64117 17.266 7.33318 17.6454 7.33318C18.0249 7.33318 18.3329 7.64117 18.3329 8.02067C18.3329 8.40016 18.0249 8.70815 17.6454 8.70815ZM15.8122 8.70815C15.4327 8.70815 15.1247 8.40016 15.1247 8.02067C15.1247 7.64117 15.4327 7.33318 15.8122 7.33318C16.1916 7.33318 16.4996 7.64117 16.4996 8.02067C16.4996 8.40016 16.1916 8.70815 15.8122 8.70815Z" fill="#107C42" />
                                            <path d="M21.0828 11.4581H0.916576C0.663581 11.4581 0.458252 11.2528 0.458252 10.9998V1.83332C0.458252 1.58033 0.663581 1.375 0.916576 1.375H21.0828C21.3358 1.375 21.5411 1.58033 21.5411 1.83332V10.9998C21.5411 11.2528 21.3358 11.4581 21.0828 11.4581Z" fill="#59D19A" />
                                            <path d="M2.75 1.375V11.4581H19.2497V1.375H2.75ZM10.0832 10.0832C8.05831 10.0832 6.41659 8.44144 6.41659 6.41656C6.41659 4.39169 8.05831 2.74997 10.0832 2.74997C12.1081 2.74997 13.7498 4.39169 13.7498 6.41656C13.7498 8.44144 12.1081 10.0832 10.0832 10.0832ZM18.1038 10.0832C17.7244 10.0832 17.4164 9.77516 17.4164 9.39567C17.4164 9.01617 17.7244 8.70818 18.1038 8.70818C18.4833 8.70818 18.7913 9.01617 18.7913 9.39567C18.7913 9.77516 18.4833 10.0832 18.1038 10.0832ZM16.2706 10.0832C15.8911 10.0832 15.5831 9.77516 15.5831 9.39567C15.5831 9.01617 15.8911 8.70818 16.2706 8.70818C16.65 8.70818 16.958 9.01617 16.958 9.39567C16.958 9.77516 16.65 10.0832 16.2706 10.0832Z" fill="#21A366" />
                                            <path d="M21.5412 13.7498H0.458324C0.205329 13.7498 0 13.5444 0 13.2914V3.20832C0 2.95533 0.205329 2.75 0.458324 2.75H21.5412C21.7942 2.75 21.9995 2.95533 21.9995 3.20832V13.2914C21.9995 13.5444 21.7942 13.7498 21.5412 13.7498Z" fill="#61E3A7" />
                                            <path d="M2.2915 2.75V13.7498H19.7078V2.75H2.2915ZM9.16636 11.9165C7.14149 11.9165 5.49977 10.2748 5.49977 8.24989C5.49977 6.22501 7.14149 4.58329 9.16636 4.58329C11.1912 4.58329 12.833 6.22501 12.833 8.24989C12.833 10.2748 11.1912 11.9165 9.16636 11.9165ZM18.562 12.3748C18.1825 12.3748 17.8745 12.0668 17.8745 11.6873C17.8745 11.3078 18.1825 10.9998 18.562 10.9998C18.9415 10.9998 19.2495 11.3078 19.2495 11.6873C19.2495 12.0668 18.9415 12.3748 18.562 12.3748ZM16.7287 12.3748C16.3492 12.3748 16.0412 12.0668 16.0412 11.6873C16.0412 11.3078 16.3492 10.9998 16.7287 10.9998C17.1082 10.9998 17.4162 11.3078 17.4162 11.6873C17.4162 12.0668 17.1082 12.3748 16.7287 12.3748Z" fill="#33C481" />
                                            <path opacity="0.05" d="M14.6663 10.0358V10.2357C14.6663 10.5647 14.8556 10.8443 15.1247 10.952C15.1311 11.9026 15.5766 12.7661 16.3122 13.2913C16.1266 13.4238 15.9597 13.5782 15.8135 13.7496H20.8528C20.7066 13.5782 20.5398 13.4238 20.3541 13.2913C21.0893 12.7665 21.5352 11.9031 21.5416 10.952C21.8107 10.8443 22 10.5643 22 10.2357V10.0358V8.30017C21.923 8.26901 21.8409 8.24976 21.7548 8.24976H14.9106C14.5233 8.24976 14.208 8.59212 14.208 9.01332V9.31903C14.208 9.64902 14.3973 9.92905 14.6663 10.0358Z" fill="black" />
                                            <path opacity="0.07" d="M21.9996 8.567C21.9272 8.51613 21.8465 8.479 21.7549 8.479H14.9107C14.6495 8.479 14.4373 8.71871 14.4373 9.01341V9.31911C14.4373 9.60831 14.6417 9.84435 14.8956 9.85352V10.2358C14.8956 10.524 15.0995 10.7601 15.3539 10.7702V10.9315C15.3539 11.9494 15.9076 12.8542 16.75 13.2914C16.5199 13.4106 16.3136 13.5678 16.1321 13.7497H20.5339C20.3524 13.5678 20.1461 13.411 19.9161 13.2914C20.7585 12.8546 21.3121 11.949 21.3121 10.9315V10.7702C21.5665 10.7601 21.7704 10.524 21.7704 10.2358V9.85352C21.8557 9.85031 21.9313 9.81502 21.9996 9.76689V8.567Z" fill="black" />
                                            <path d="M21.0829 10.9315V9.43188H15.583V10.9315C15.583 12.0347 16.2962 12.9967 17.3136 13.2644L17.4163 13.2914L17.3136 13.3185C16.2962 13.5861 15.583 14.5482 15.583 15.6513V17.151H21.0829V15.6513C21.0829 14.5482 20.3697 13.5861 19.3523 13.3185L19.2496 13.2914L19.3523 13.2644C20.3697 12.9967 21.0829 12.0347 21.0829 10.9315Z" fill="url(#paint0_radial_1382_1002)" />
                                            <path d="M18.7279 15.3387C18.6908 15.1229 18.5112 14.9556 18.2847 14.9556C18.0583 14.9556 17.8787 15.1229 17.8415 15.3387C17.237 15.5885 16.3547 16.2306 16.3547 17.1509H20.2143C20.2143 16.2311 19.3325 15.589 18.7279 15.3387Z" fill="url(#paint1_linear_1382_1002)" />
                                            <path d="M18.2847 14.4977C18.5379 14.4977 18.7431 14.2925 18.7431 14.0394C18.7431 13.7863 18.5379 13.5811 18.2847 13.5811C18.0316 13.5811 17.8264 13.7863 17.8264 14.0394C17.8264 14.2925 18.0316 14.4977 18.2847 14.4977Z" fill="url(#paint2_linear_1382_1002)" />
                                            <path d="M21.2947 10.5414H15.3713C15.2352 10.5414 15.1248 10.4044 15.1248 10.2357V9.62476H21.5413V10.2357C21.5413 10.4044 21.4308 10.5414 21.2947 10.5414Z" fill="url(#paint3_linear_1382_1002)" />
                                            <path d="M21.5413 16.347V16.9579H15.1248V16.347C15.1248 16.1783 15.2352 16.0413 15.3713 16.0413H21.2943C21.4308 16.0413 21.5413 16.1783 21.5413 16.347Z" fill="url(#paint4_linear_1382_1002)" />
                                            <path d="M21.7552 9.6249H14.9105C14.7758 9.6249 14.6663 9.48786 14.6663 9.3192V9.0135C14.6663 8.84529 14.7758 8.70825 14.9105 8.70825H21.7547C21.8899 8.70825 21.9994 8.84529 21.9994 9.01395V9.31966C21.9994 9.48786 21.8899 9.6249 21.7552 9.6249Z" fill="url(#paint5_linear_1382_1002)" />
                                            <path d="M16.4998 11.9165C16.4998 12.604 18.1296 13.2915 18.3331 13.2915C18.5365 13.2915 20.1663 12.604 20.1663 11.9165H16.4998Z" fill="url(#paint6_linear_1382_1002)" />
                                            <path d="M14.9073 16.958H21.6617C21.795 16.958 21.9027 17.095 21.9027 17.2637V17.5694C21.9027 17.7381 21.7946 17.8751 21.6617 17.8751H14.9073C14.7744 17.8747 14.6663 17.7376 14.6663 17.569V17.2633C14.6663 17.095 14.7744 16.958 14.9073 16.958Z" fill="url(#paint7_linear_1382_1002)" />
                                            <defs>
                                                <radialGradient id="paint0_radial_1382_1002" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.333 13.2914) scale(3.35081)">
                                                    <stop stopColor="#FAFAFB" />
                                                    <stop offset="1" stopColor="#C8CDD1" />
                                                </radialGradient>
                                                <linearGradient id="paint1_linear_1382_1002" x1="18.2847" y1="17.6212" x2="18.2847" y2="15.0266" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#EBA84B" />
                                                    <stop offset="1" stopColor="#D97218" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_1382_1002" x1="18.2847" y1="14.6939" x2="18.2847" y2="13.6104" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#EBA84B" />
                                                    <stop offset="1" stopColor="#D97218" />
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_1382_1002" x1="15.1248" y1="10.0831" x2="21.5413" y2="10.0831" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#912FBD" />
                                                    <stop offset="1" stopColor="#9332BF" />
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_1382_1002" x1="15.1248" y1="16.4996" x2="21.5413" y2="16.4996" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#912FBD" />
                                                    <stop offset="1" stopColor="#9332BF" />
                                                </linearGradient>
                                                <linearGradient id="paint5_linear_1382_1002" x1="14.6663" y1="9.16658" x2="21.9994" y2="9.16658" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#AE4CD5" />
                                                    <stop offset="1" stopColor="#AC4AD5" />
                                                </linearGradient>
                                                <linearGradient id="paint6_linear_1382_1002" x1="18.3331" y1="11.6223" x2="18.3331" y2="13.247" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#EBA84B" />
                                                    <stop offset="1" stopColor="#D97218" />
                                                </linearGradient>
                                                <linearGradient id="paint7_linear_1382_1002" x1="21.9027" y1="17.4168" x2="14.6663" y2="17.4168" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#AE4CD5" />
                                                    <stop offset="1" stopColor="#AC4AD5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>

                                    <p className='text-[10px] text-akauntme'>
                                        Debts
                                    </p>
                                </div>
                                <div className='shadow-sm shadow-akauntme/15 rounded-lg size-10 p-2 flex flex-col gap-y-1 justify-center items-center'>
                                    <div>
                                        <svg className='size-4' width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.2445 23.2H0.644445C0.288711 23.2 0 22.9113 0 22.5556V0.644445C0 0.288711 0.288711 0 0.644445 0H12.2445C12.6002 0 12.8889 0.288711 12.8889 0.644445V22.5556C12.8889 22.9113 12.6002 23.2 12.2445 23.2Z" fill="#61E3A7" />
                                            <path d="M12.8889 1.93335H0V21.2667H12.8889V1.93335Z" fill="#33C481" />
                                            <path d="M10.3112 4.51106C10.6671 4.51106 10.9556 4.22253 10.9556 3.86661C10.9556 3.5107 10.6671 3.22217 10.3112 3.22217C9.95528 3.22217 9.66675 3.5107 9.66675 3.86661C9.66675 4.22253 9.95528 4.51106 10.3112 4.51106Z" fill="#61E3A7" />
                                            <path d="M10.3112 7.08894C10.6671 7.08894 10.9556 6.80041 10.9556 6.44449C10.9556 6.08858 10.6671 5.80005 10.3112 5.80005C9.95528 5.80005 9.66675 6.08858 9.66675 6.44449C9.66675 6.80041 9.95528 7.08894 10.3112 7.08894Z" fill="#61E3A7" />
                                            <path d="M6.44446 18.0444C8.93588 18.0444 10.9556 16.0247 10.9556 13.5333C10.9556 11.0419 8.93588 9.02222 6.44446 9.02222C3.95304 9.02222 1.93335 11.0419 1.93335 13.5333C1.93335 16.0247 3.95304 18.0444 6.44446 18.0444Z" fill="#61E3A7" />
                                            <path opacity="0.05" d="M12.8888 21.2667V7.7334H10.0101C9.10978 7.7334 8.37769 8.45711 8.37769 9.34644V21.2667H12.8888Z" fill="black" />
                                            <path opacity="0.07" d="M12.8888 21.2668V8.05566H10.0101C9.28769 8.05566 8.69995 8.63438 8.69995 9.34649V21.2668H12.8888Z" fill="black" />
                                            <path d="M19.3333 22.2313V9.34629C19.3333 8.8114 18.8912 8.37769 18.3454 8.37769H10.0102C9.46431 8.37769 9.02222 8.8114 9.02222 9.34629V22.2313C9.02222 22.7662 9.46431 23.1999 10.0102 23.1999H18.3448C18.8912 23.1999 19.3333 22.7662 19.3333 22.2313Z" fill="url(#paint0_linear_1382_1023)" />
                                            <path d="M18.0445 8.37769H16.7556V23.1999H18.0445V8.37769Z" fill="url(#paint1_linear_1382_1023)" />
                                            <path d="M14.1777 22.2186V10.0038C14.1777 9.81755 14.3285 9.66675 14.5148 9.66675H15.1302C15.3158 9.66675 15.4666 9.81755 15.4666 10.0038V22.2192C15.4666 22.4048 15.3158 22.5556 15.1296 22.5556H14.5141C14.3285 22.5556 14.1777 22.4048 14.1777 22.2186Z" fill="#A8E7FF" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1382_1023" x1="18.6006" y1="14.5495" x2="8.38486" y2="17.4122" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#32BDEF" />
                                                    <stop offset="1" stopColor="#1EA2E4" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1382_1023" x1="17.4001" y1="8.37769" x2="17.4001" y2="23.1999" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#45494D" />
                                                    <stop offset="1" stopColor="#6D7479" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>

                                    <p className='text-[8px] text-akauntme'>
                                        Expense
                                    </p>
                                </div>
                                <div className='shadow-sm shadow-akauntme/15 rounded-lg size-10 p-2 flex flex-col gap-y-1 justify-center items-center'>
                                    <div>



                                        <svg className='size-4' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.06733 10.1051C4.81841 10.1051 4.59572 9.93061 4.54326 9.67794L3.05778 2.46091C2.95553 1.96521 2.51497 1.60602 2.00911 1.60602H1.07071C0.775219 1.60602 0.5354 1.3662 0.5354 1.07071C0.5354 0.775219 0.775219 0.5354 1.07071 0.5354H2.00911C3.0203 0.5354 3.90249 1.25432 4.10645 2.24464L5.59193 9.46168C5.65135 9.75128 5.46506 10.0345 5.17546 10.0939C5.13959 10.1019 5.10319 10.1051 5.06733 10.1051Z" fill="url(#paint0_linear_1382_1038)" />
                                            <path d="M19.8064 20.3417C20.6933 20.3417 21.4123 19.6227 21.4123 18.7358C21.4123 17.8489 20.6933 17.1299 19.8064 17.1299C18.9194 17.1299 18.2004 17.8489 18.2004 18.7358C18.2004 19.6227 18.9194 20.3417 19.8064 20.3417Z" fill="#5C5F61" />
                                            <path opacity="0.15" d="M19.8065 19.2711C20.1022 19.2711 20.3419 19.0314 20.3419 18.7357C20.3419 18.4401 20.1022 18.2004 19.8065 18.2004C19.5109 18.2004 19.2712 18.4401 19.2712 18.7357C19.2712 19.0314 19.5109 19.2711 19.8065 19.2711Z" fill="black" />
                                            <path d="M8.02975 20.3417C8.91668 20.3417 9.63568 19.6227 9.63568 18.7358C9.63568 17.8489 8.91668 17.1299 8.02975 17.1299C7.14283 17.1299 6.42383 17.8489 6.42383 18.7358C6.42383 19.6227 7.14283 20.3417 8.02975 20.3417Z" fill="#5C5F61" />
                                            <path opacity="0.15" d="M8.02969 19.2711C8.32534 19.2711 8.565 19.0314 8.565 18.7357C8.565 18.4401 8.32534 18.2004 8.02969 18.2004C7.73405 18.2004 7.49438 18.4401 7.49438 18.7357C7.49438 19.0314 7.73405 19.2711 8.02969 19.2711Z" fill="black" />
                                            <path d="M21.9478 17.6653H6.95911C5.77822 17.6653 4.81787 16.7049 4.81787 15.524C4.81787 14.3432 5.77822 13.3828 6.95911 13.3828H20.3418C20.6373 13.3828 20.8771 13.6226 20.8771 13.9181C20.8771 14.2136 20.6373 14.4534 20.3418 14.4534H6.95911C6.36866 14.4534 5.88849 14.9336 5.88849 15.524C5.88849 16.1145 6.36866 16.5947 6.95911 16.5947H21.9478C22.2432 16.5947 22.4831 16.8345 22.4831 17.13C22.4831 17.4255 22.2432 17.6653 21.9478 17.6653Z" fill="url(#paint1_linear_1382_1038)" />
                                            <path d="M2.14124 1.07062C2.14124 1.6616 1.6616 2.14124 1.07062 2.14124C0.479637 2.14124 0 1.6616 0 1.07062C0 0.479637 0.479637 0 1.07062 0C1.6616 0 2.14124 0.479637 2.14124 1.07062Z" fill="url(#paint2_linear_1382_1038)" />
                                            <path d="M5.18723 13.583C5.28358 14.0883 5.72521 14.4534 6.23911 14.4534H21.5762C22.0998 14.4534 22.5462 14.0749 22.6324 13.5589L23.7368 6.9323L3.62573 5.38525L5.18723 13.583Z" fill="url(#paint3_linear_1382_1038)" />
                                            <path d="M23.506 4.77287L3.21191 3.21191L3.62571 5.38527L23.7362 6.93231L23.9926 5.3949C24.0445 5.08496 23.8192 4.79696 23.506 4.77287Z" fill="url(#paint4_linear_1382_1038)" />
                                            <path opacity="0.05" d="M12.312 3.91211V8.02971H10.8945C10.1794 8.02971 9.8207 8.89477 10.3266 9.40063L13.161 12.2351C13.5791 12.6532 14.2568 12.6532 14.6749 12.2351L17.5093 9.40063C18.0152 8.89477 17.6571 8.02971 16.9414 8.02971H15.5239V4.15889L12.312 3.91211Z" fill="black" />
                                            <path opacity="0.07" d="M12.5798 3.93237V8.29728H10.9626C10.4605 8.29728 10.2089 8.90432 10.5638 9.25977L13.3094 12.0054C13.645 12.341 14.1894 12.341 14.5251 12.0054L17.2707 9.25977C17.6256 8.90486 17.3745 8.29728 16.8719 8.29728H15.2563V4.13847L12.5798 3.93237Z" fill="black" />
                                            <path d="M16.8051 8.56488H14.9888V1.60587C14.9888 1.31038 14.7489 1.07056 14.4534 1.07056H13.3828C13.0873 1.07056 12.8475 1.31038 12.8475 1.60587V8.56488H11.0312C10.7421 8.56488 10.5976 8.91444 10.8021 9.11839L13.4594 11.7757C13.7126 12.0289 14.1237 12.0289 14.3769 11.7757L17.0342 9.11839C17.2387 8.91444 17.0941 8.56488 16.8051 8.56488Z" fill="#33C481" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1382_1038" x1="3.06955" y1="10.1051" x2="3.06955" y2="0.5354" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#92A3B0" />
                                                    <stop offset="0.015" stopColor="#A3B5C4" />
                                                    <stop offset="0.032" stopColor="#AEC2D1" />
                                                    <stop offset="0.046" stopColor="#B2C6D6" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1382_1038" x1="13.6505" y1="17.6653" x2="13.6505" y2="13.3828" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#92A3B0" />
                                                    <stop offset="0.015" stopColor="#A3B5C4" />
                                                    <stop offset="0.032" stopColor="#AEC2D1" />
                                                    <stop offset="0.046" stopColor="#B2C6D6" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_1382_1038" x1="0.404694" y1="0.404694" x2="1.81149" y2="1.81149" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#199AE0" />
                                                    <stop offset="1" stopColor="#0782D8" />
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_1382_1038" x1="3.62573" y1="9.91932" x2="23.7368" y2="9.91932" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#3079D6" />
                                                    <stop offset="1" stopColor="#297CD2" />
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_1382_1038" x1="3.21191" y1="5.07211" x2="24.0001" y2="5.07211" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#42A3F2" />
                                                    <stop offset="1" stopColor="#42A4EB" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>

                                    <p className='text-[10px] text-akauntme'>
                                        Stock
                                    </p>
                                </div>

                            </div>

                            <div className='bg-white border mt-4 p-0.5 px-2 rounded-md flex justify-center items-center w-full'>

                                <div className='h-[200px] bg-white w-full overflow-x-hidden overflow-y-auto mobile-custom-scrollbar mt-2'>
                                    <div className='flex justify-between items-center mx-1 border-b border-gray-100/70 py-2'>
                                        <h2 className='text-sm'>
                                            Today&apos;s records
                                        </h2>
                                        <a href="#" className='text-xs text-akauntme'>Sell all</a>
                                    </div>

                                    <ul className='mt-3 flex flex-col gap-y-4 mb-10 mx-2'>
                                        {MobileList.map((e, index) =>
                                            <li key={index} className='bg-gray-100/20 shadow-sm hover:shadow-inner transition-shadow cursor-pointer rounded-md py-2 px-1 flex items-center justify-between text-xs'>
                                                <div className='flex gap-x-2 items-center'>
                                                    <div>
                                                        {e.salesType === "Debited" ?
                                                            <svg className='size-6' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0563 0.466643L13.8235 1.35239L14.8368 0.763296C15.5487 0.349305 16.4615 0.662807 16.7696 1.42701L17.2076 2.51373L18.3569 2.28568C19.1645 2.12562 19.9262 2.71832 19.9696 3.54089L20.0309 4.71125L21.1923 4.86891C22.0082 4.97963 22.536 5.78775 22.3097 6.57963L21.9878 7.70607L23.0348 8.23198C23.7707 8.60145 24.0072 9.53774 23.5366 10.2129L22.8663 11.1738L23.6859 12.0115C24.2617 12.5999 24.1817 13.5621 23.5174 14.0477L22.5715 14.7391L23.0745 15.7975C23.4283 16.5413 23.0402 17.4252 22.2537 17.6689L21.1345 18.0155L21.2669 19.1799C21.3596 19.9976 20.7061 20.7083 19.8829 20.683L18.712 20.6475L18.4592 21.7914C18.2817 22.5953 17.4327 23.055 16.6625 22.7638L15.5661 22.3498L14.9553 23.3499C14.5263 24.0527 13.5738 24.2116 12.9401 23.6862L12.0345 22.9377L11.1319 23.685C10.4977 24.2104 9.54578 24.0515 9.11675 23.3487L8.50599 22.3486L7.40963 22.7626C6.63942 23.0532 5.79037 22.5941 5.61286 21.7902L5.36014 20.6463L4.18917 20.6818C3.366 20.7071 2.71252 19.9964 2.80519 19.1787L2.93757 18.0143L1.81835 17.6677C1.03188 17.424 0.643769 16.5401 0.997587 15.7963L1.50063 14.7379L0.554712 14.0465C-0.110802 13.5621 -0.19023 12.5999 0.385627 12.0115L1.20518 11.1738L0.534857 10.2129C0.0637015 9.53774 0.300783 8.60205 1.0367 8.23198L2.08371 7.70607L1.76179 6.57963C1.53554 5.78835 2.06325 4.97963 2.8792 4.86891L4.04054 4.71125L4.10192 3.54089C4.14464 2.71892 4.90704 2.12562 5.71456 2.28568L6.86386 2.51373L7.30193 1.42701C7.60941 0.663409 8.52284 0.349907 9.23469 0.763296L10.248 1.35239L11.0152 0.466643C11.552 -0.155547 12.5171 -0.155547 13.0563 0.466643Z" fill="url(#paint0_linear_1382_887)" />
                                                                <path d="M4.67367 14.1371V13.1025C4.86145 13.2602 5.06487 13.3776 5.28515 13.4564C5.50543 13.5353 5.72631 13.5738 5.9508 13.5738C6.08201 13.5738 6.19696 13.5618 6.29446 13.5383C6.39256 13.5148 6.47502 13.4817 6.54002 13.4396C6.60562 13.3987 6.65497 13.3481 6.68747 13.2915C6.71997 13.2337 6.73562 13.173 6.73562 13.1055C6.73562 13.0153 6.70974 12.934 6.65798 12.8624C6.60622 12.792 6.5358 12.7258 6.44613 12.6662C6.35705 12.6048 6.25052 12.5476 6.12775 12.4911C6.00497 12.4357 5.87256 12.3779 5.73052 12.3195C5.36821 12.1691 5.09798 11.9843 4.92043 11.767C4.74228 11.5498 4.65381 11.2861 4.65381 10.978C4.65381 10.7373 4.70256 10.529 4.79946 10.3563C4.89636 10.1824 5.02816 10.0403 5.19487 9.92717C5.36219 9.81522 5.55599 9.73337 5.77566 9.68041C5.99534 9.62744 6.22826 9.60156 6.47381 9.60156C6.71455 9.60156 6.92881 9.61541 7.11478 9.6449C7.30196 9.67439 7.47349 9.71892 7.63057 9.77911V10.7451C7.55293 10.6909 7.46807 10.644 7.37659 10.603C7.28511 10.5621 7.19062 10.529 7.09372 10.5019C6.99682 10.4749 6.90053 10.455 6.80423 10.4417C6.70853 10.4291 6.61705 10.4219 6.53159 10.4219C6.41302 10.4219 6.30529 10.4339 6.20839 10.4562C6.1115 10.4785 6.02904 10.5104 5.96284 10.5513C5.89603 10.5922 5.84427 10.6416 5.80756 10.6981C5.77025 10.7559 5.75219 10.8191 5.75219 10.8907C5.75219 10.9684 5.77265 11.0376 5.81418 11.099C5.8545 11.1616 5.91288 11.2187 5.98872 11.2741C6.06395 11.3295 6.15543 11.3824 6.26316 11.4354C6.3715 11.4884 6.49307 11.5437 6.62849 11.5985C6.81386 11.6761 6.97997 11.7586 7.12742 11.8465C7.27548 11.9337 7.40187 12.0324 7.50779 12.1414C7.61312 12.2521 7.69437 12.3779 7.74974 12.5187C7.80631 12.6596 7.834 12.8233 7.834 13.0111C7.834 13.2699 7.78525 13.4871 7.68715 13.6623C7.58904 13.8386 7.45604 13.9806 7.28812 14.089C7.1202 14.1985 6.9246 14.2762 6.70071 14.3231C6.47802 14.3712 6.2421 14.3947 5.99474 14.3947C5.74015 14.3947 5.49821 14.3737 5.2689 14.3303C5.0402 14.2876 4.84159 14.2226 4.67367 14.1371Z" fill="white" />
                                                                <path d="M12.6737 14.3142H11.5357L11.2059 13.2833H9.55753L9.23075 14.3142H8.09937L9.78682 9.67969H11.0253L12.6737 14.3142ZM10.967 12.4817L10.4693 10.923C10.4319 10.8069 10.4067 10.6678 10.3916 10.5072H10.3658C10.3543 10.6426 10.3278 10.7774 10.2845 10.9104L9.7802 12.4817H10.967Z" fill="white" />
                                                                <path d="M16.0117 14.3142H13.2512V9.67969H14.2953V13.468H16.0117V14.3142Z" fill="white" />
                                                                <path d="M19.4152 14.3142H16.6355V9.67969H19.3081V10.5294H17.679V11.5603H19.1956V12.4077H17.679V13.468H19.4152V14.3142Z" fill="white" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_1382_887" x1="3.63678" y1="3.72442" x2="20.6453" y2="20.7317" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#635BFF" />
                                                                        <stop offset="1" stopColor="#3F9ECA" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            :

                                                            <svg className='size-6' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0563 0.466643L13.8235 1.35239L14.8368 0.763296C15.5487 0.349305 16.4615 0.662807 16.7696 1.42701L17.2076 2.51373L18.3569 2.28568C19.1645 2.12562 19.9262 2.71832 19.9696 3.54089L20.0309 4.71125L21.1923 4.86891C22.0082 4.97963 22.536 5.78775 22.3097 6.57963L21.9878 7.70607L23.0348 8.23198C23.7707 8.60145 24.0072 9.53774 23.5366 10.2129L22.8663 11.1738L23.6859 12.0115C24.2617 12.5999 24.1817 13.5621 23.5174 14.0477L22.5715 14.7391L23.0745 15.7975C23.4283 16.5413 23.0402 17.4252 22.2537 17.6689L21.1345 18.0155L21.2669 19.1799C21.3596 19.9976 20.7061 20.7083 19.8829 20.683L18.712 20.6475L18.4592 21.7914C18.2817 22.5953 17.4327 23.055 16.6625 22.7638L15.5661 22.3498L14.9553 23.3499C14.5263 24.0527 13.5738 24.2116 12.9401 23.6862L12.0345 22.9377L11.1319 23.685C10.4977 24.2104 9.54578 24.0515 9.11675 23.3487L8.50599 22.3486L7.40963 22.7626C6.63942 23.0532 5.79037 22.5941 5.61286 21.7902L5.36014 20.6463L4.18917 20.6818C3.366 20.7071 2.71252 19.9964 2.80519 19.1787L2.93757 18.0143L1.81835 17.6677C1.03188 17.424 0.643769 16.5401 0.997587 15.7963L1.50063 14.7379L0.554712 14.0465C-0.110802 13.5621 -0.19023 12.5999 0.385627 12.0115L1.20518 11.1738L0.534857 10.2129C0.0637015 9.53774 0.300783 8.60205 1.0367 8.23198L2.08371 7.70607L1.76179 6.57963C1.53554 5.78835 2.06325 4.97963 2.8792 4.86891L4.04054 4.71125L4.10192 3.54089C4.14464 2.71892 4.90704 2.12562 5.71456 2.28568L6.86386 2.51373L7.30193 1.42701C7.60941 0.663409 8.52284 0.349907 9.23469 0.763296L10.248 1.35239L11.0152 0.466643C11.552 -0.155547 12.5171 -0.155547 13.0563 0.466643Z" fill="url(#paint0_linear_1382_913)" />
                                                                <path d="M4.95 10.788C5.394 10.788 5.782 10.876 6.114 11.052C6.446 11.228 6.702 11.476 6.882 11.796C7.066 12.112 7.158 12.478 7.158 12.894C7.158 13.306 7.066 13.672 6.882 13.992C6.702 14.312 6.444 14.56 6.108 14.736C5.776 14.912 5.39 15 4.95 15H3.372V10.788H4.95ZM4.884 14.112C5.272 14.112 5.574 14.006 5.79 13.794C6.006 13.582 6.114 13.282 6.114 12.894C6.114 12.506 6.006 12.204 5.79 11.988C5.574 11.772 5.272 11.664 4.884 11.664H4.398V14.112H4.884ZM8.75738 11.61V12.462H10.1314V13.254H8.75738V14.178H10.3114V15H7.73138V10.788H10.3114V11.61H8.75738ZM13.5275 12.84C13.7715 12.892 13.9675 13.014 14.1155 13.206C14.2635 13.394 14.3375 13.61 14.3375 13.854C14.3375 14.206 14.2135 14.486 13.9655 14.694C13.7215 14.898 13.3795 15 12.9395 15H10.9775V10.788H12.8735C13.3015 10.788 13.6355 10.886 13.8755 11.082C14.1195 11.278 14.2415 11.544 14.2415 11.88C14.2415 12.128 14.1755 12.334 14.0435 12.498C13.9155 12.662 13.7435 12.776 13.5275 12.84ZM12.0035 12.492H12.6755C12.8435 12.492 12.9715 12.456 13.0595 12.384C13.1515 12.308 13.1975 12.198 13.1975 12.054C13.1975 11.91 13.1515 11.8 13.0595 11.724C12.9715 11.648 12.8435 11.61 12.6755 11.61H12.0035V12.492ZM12.7595 14.172C12.9315 14.172 13.0635 14.134 13.1555 14.058C13.2515 13.978 13.2995 13.864 13.2995 13.716C13.2995 13.568 13.2495 13.452 13.1495 13.368C13.0535 13.284 12.9195 13.242 12.7475 13.242H12.0035V14.172H12.7595ZM17.9625 10.788V11.61H16.8465V15H15.8205V11.61H14.7045V10.788H17.9625ZM20.0015 15.042C19.6935 15.042 19.4175 14.992 19.1735 14.892C18.9295 14.792 18.7335 14.644 18.5855 14.448C18.4415 14.252 18.3655 14.016 18.3575 13.74H19.4495C19.4655 13.896 19.5195 14.016 19.6115 14.1C19.7035 14.18 19.8235 14.22 19.9715 14.22C20.1235 14.22 20.2435 14.186 20.3315 14.118C20.4195 14.046 20.4635 13.948 20.4635 13.824C20.4635 13.72 20.4275 13.634 20.3555 13.566C20.2875 13.498 20.2015 13.442 20.0975 13.398C19.9975 13.354 19.8535 13.304 19.6655 13.248C19.3935 13.164 19.1715 13.08 18.9995 12.996C18.8275 12.912 18.6795 12.788 18.5555 12.624C18.4315 12.46 18.3695 12.246 18.3695 11.982C18.3695 11.59 18.5115 11.284 18.7955 11.064C19.0795 10.84 19.4495 10.728 19.9055 10.728C20.3695 10.728 20.7435 10.84 21.0275 11.064C21.3115 11.284 21.4635 11.592 21.4835 11.988H20.3735C20.3655 11.852 20.3155 11.746 20.2235 11.67C20.1315 11.59 20.0135 11.55 19.8695 11.55C19.7455 11.55 19.6455 11.584 19.5695 11.652C19.4935 11.716 19.4555 11.81 19.4555 11.934C19.4555 12.07 19.5195 12.176 19.6475 12.252C19.7755 12.328 19.9755 12.41 20.2475 12.498C20.5195 12.59 20.7395 12.678 20.9075 12.762C21.0795 12.846 21.2275 12.968 21.3515 13.128C21.4755 13.288 21.5375 13.494 21.5375 13.746C21.5375 13.986 21.4755 14.204 21.3515 14.4C21.2315 14.596 21.0555 14.752 20.8235 14.868C20.5915 14.984 20.3175 15.042 20.0015 15.042Z" fill="white" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_1382_913" x1="3.63678" y1="3.72442" x2="20.6453" y2="20.7317" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#F44F5A" />
                                                                        <stop offset="0.443" stopColor="#EE3D4A" />
                                                                        <stop offset="1" stopColor="#E52030" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        }

                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h2 className='text-gray-900 font-[500]'>{e.customerName}</h2>
                                                        <p className='text-[10px] text-gray-500'>{e.dateSold}</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <h2 className='text-akauntme-deep font-semibold'> &#8358;{e.amount}</h2>
                                                    <p className='text-[10px]'>{e.salesType}</p>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                        </div>



                        <div className='absolute bottom-0 bg-gradient-to-tr from-[#ECECEC] border-t border-gray-200 to-white p-2 w-full'>


                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col items-center gap-y-0.5 text-xs text-akauntme cursor-pointer'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-4 fill-current'>
                                            <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
                                        </svg>
                                    </div>
                                    <div className='font-semibold'>Home</div>
                                </div>
                                <div className='flex flex-col items-center gap-y-0.5 text-xs text-slate-700 hover:text-akauntme cursor-pointer'>
                                    <div>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-4 fill-current'>
                                            <path d="M12.5 4C10.02 4 8 6.02 8 8.5L8 39.5C8 41.98 10.02 44 12.5 44L35.5 44C37.981 44 40 41.981 40 39.5L40 18.5C40 18.085 39.831797 17.710703 39.560547 17.439453L26.560547 4.4394531C26.289297 4.1682031 25.915 4 25.5 4L12.5 4 z M 12.5 7L24 7L24 15.5C24 17.98 26.02 20 28.5 20L37 20L37 39.5C37 40.327 36.327 41 35.5 41L12.5 41C11.67 41 11 40.33 11 39.5L11 8.5C11 7.67 11.67 7 12.5 7 z M 27 9.1210938L34.878906 17L28.5 17C27.67 17 27 16.33 27 15.5L27 9.1210938 z M 32 25 A 2 2 0 0 0 30.005859 26.873047L26 30.878906L22.994141 27.873047 A 2 2 0 0 0 21 26 A 2 2 0 0 0 19.005859 27.873047L15.873047 31.005859 A 2 2 0 0 0 16 35 A 2 2 0 0 0 17.994141 33.126953L21 30.121094L24.005859 33.126953 A 2 2 0 0 0 26 35 A 2 2 0 0 0 27.994141 33.126953L32.126953 28.994141 A 2 2 0 0 0 32 25 z" />
                                        </svg>
                                    </div>
                                    <div className='font-normal'>Reports</div>
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <div className='absolute bottom-0 size-10 bg-akauntme rounded-full flex justify-center items-center text-white'>
                                        <div className='bg-akauntme border border-white rounded-full size-8 flex justify-center items-center hover:rotate-90 transition-all'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='size-5'>
                                                <path d="M45.21875 2C43.550781 1.972656 41.476563 3.042969 39.375 4.28125L45.71875 10.625C47.519531 7.570313 48.964844 4.527344 47.21875 2.78125C46.671875 2.234375 45.976563 2.011719 45.21875 2 Z M 36.15625 3.21875C34.007813 3.316406 30.542969 4.144531 27 7.6875C23.378906 11.304688 21.792969 14.257813 20.75 16.21875C20.246094 17.167969 19.839844 17.902344 19.40625 18.375C18.574219 19.28125 17.433594 18.890625 17.3125 18.84375C16.800781 18.632813 16.210938 18.863281 16 19.375C15.789063 19.886719 16.019531 20.476563 16.53125 20.6875C16.582031 20.707031 17.234375 20.96875 18.09375 20.96875C18.574219 20.96875 19.113281 20.871094 19.65625 20.625C20.390625 19.84375 21.140625 19.066406 21.875 18.3125C22.082031 17.953125 22.273438 17.582031 22.5 17.15625C23.546875 15.1875 24.996094 12.5 28.40625 9.09375C31.648438 5.855469 34.722656 5.195313 36.40625 5.15625C36.652344 4.960938 36.902344 4.808594 37.09375 4.65625L37.78125 4.09375L38.625 3.5625C38.53125 3.492188 38.453125 3.410156 38.34375 3.375C38.261719 3.347656 37.445313 3.160156 36.15625 3.21875 Z M 37.71875 5.4375C35.59375 7.097656 29.996094 11.597656 24.09375 17.5C17.78125 23.8125 10.628906 32.199219 8.53125 34.6875L15.3125 41.46875C17.800781 39.375 26.1875 32.21875 32.5 25.90625C38.402344 20.003906 42.902344 14.410156 44.5625 12.28125 Z M 7.4375 36.4375C4.546875 40.800781 3.824219 43.820313 3.625 45C3.625 45.003906 3.59375 44.996094 3.59375 45L2.25 46.3125C1.859375 46.703125 1.859375 47.359375 2.25 47.75C2.445313 47.945313 2.710938 48.03125 2.96875 48.03125C3.226563 48.03125 3.492188 47.945313 3.6875 47.75L5 46.40625C5.003906 46.40625 4.996094 46.375 5 46.375C6.179688 46.175781 9.203125 45.453125 13.5625 42.5625Z" fill="#ECE8E8" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-y-0.5 text-xs text-slate-700 hover:text-akauntme cursor-pointer'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-4 fill-current'>
                                            <path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 34.289062C5.7358129 37.943043 7.4890473 41.848282 11.292969 41.988281 A 1.50015 1.50015 0 0 0 11.5 42L36.5 42C38.161766 42 39.603649 41.060263 40.541016 39.771484C41.478383 38.482706 42 36.813766 42 35C42 33.186234 41.478383 31.517294 40.541016 30.228516C39.603649 28.939737 38.161766 28 36.5 28L36 28L36 11.5C36 8.4802259 33.519774 6 30.5 6L11.5 6 z M 11.5 9L30.5 9C31.898226 9 33 10.101774 33 11.5L33 28L11.5 28 A 1.50015 1.50015 0 0 0 11.302734 28.011719C10.428166 28.042379 9.659926 28.267868 9 28.648438L9 11.5C9 10.101774 10.101774 9 11.5 9 z M 14.5 12 A 1.50015 1.50015 0 1 0 14.5 15L16.5 15 A 1.50015 1.50015 0 1 0 16.5 12L14.5 12 z M 21.5 12 A 1.50015 1.50015 0 1 0 21.5 15L27.5 15 A 1.50015 1.50015 0 1 0 27.5 12L21.5 12 z M 14.5 17 A 1.50015 1.50015 0 1 0 14.5 20L20.5 20 A 1.50015 1.50015 0 1 0 20.5 17L14.5 17 z M 25.5 17 A 1.50015 1.50015 0 1 0 25.5 20L27.5 20 A 1.50015 1.50015 0 1 0 27.5 17L25.5 17 z M 14.5 22 A 1.50015 1.50015 0 1 0 14.5 25L20.5 25 A 1.50015 1.50015 0 1 0 20.5 22L14.5 22 z M 11.5 31C14.77083 31 14.77083 39 11.5 39C8.2291699 39 8.2291699 31 11.5 31 z M 16.140625 31L36.5 31C37.047234 31 37.604851 31.290465 38.115234 31.992188C38.625617 32.693908 39 33.775766 39 35C39 36.224234 38.625617 37.306092 38.115234 38.007812C37.604851 38.709534 37.047234 39 36.5 39L16.140625 39C17.342384 36.636789 17.342384 33.363211 16.140625 31 z" />
                                        </svg>
                                    </div>
                                    <div className='font-normal'>History</div>
                                </div>
                                <div className='flex flex-col items-center gap-y-0.5 text-xs text-slate-700 hover:text-akauntme cursor-pointer'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-4 fill-current'>
                                            <path d="M24 4C22.457143 4 20.866899 4.2150606 19.462891 4.5390625 A 1.50015 1.50015 0 0 0 18.308594 5.8457031L18.013672 8.6933594C17.872912 9.6653041 17.295767 10.565913 16.544922 11.003906C15.792476 11.442833 14.645356 11.515856 13.828125 11.138672 A 1.50015 1.50015 0 0 0 13.808594 11.128906L11.109375 9.9296875 A 1.50015 1.50015 0 0 0 9.4121094 10.267578C7.3537242 12.434299 5.7286939 15.138048 4.8574219 18.1875 A 1.50015 1.50015 0 0 0 5.4335938 19.824219L7.8320312 21.523438 A 1.50015 1.50015 0 0 0 7.8671875 21.548828C8.5871588 22.028809 9 22.928962 9 23.900391C9 24.798542 8.4918132 25.79369 7.8222656 26.283203L5.4335938 27.976562 A 1.50015 1.50015 0 0 0 4.8574219 29.611328C5.7312856 32.669851 7.3707183 35.27549 9.3886719 37.505859 A 1.50015 1.50015 0 0 0 11.109375 37.871094L13.808594 36.669922 A 1.50015 1.50015 0 0 0 13.828125 36.662109C14.671931 36.272661 15.659466 36.320391 16.587891 36.820312C17.4315 37.274564 17.939711 38.109074 18.003906 39.007812 A 1.50015 1.50015 0 0 0 18.007812 39.054688L18.308594 41.955078 A 1.50015 1.50015 0 0 0 19.486328 43.267578C20.953105 43.581887 22.457143 43.800781 24 43.800781C25.542857 43.800781 27.133101 43.585721 28.537109 43.261719 A 1.50015 1.50015 0 0 0 29.691406 41.964844L29.984375 39.3125C29.984375 39.3125 29.984375 39.310547 29.984375 39.310547C30.124031 38.33693 30.703107 37.434744 31.455078 36.996094C32.207524 36.557167 33.354644 36.484144 34.171875 36.861328 A 1.50015 1.50015 0 0 0 34.191406 36.871094L36.890625 38.070312 A 1.50015 1.50015 0 0 0 38.587891 37.732422C40.646276 35.565701 42.271306 32.861952 43.142578 29.8125 A 1.50015 1.50015 0 0 0 42.566406 28.175781L40.167969 26.476562 A 1.50015 1.50015 0 0 0 40.132812 26.451172C39.412846 25.971204 39 25.071038 39 24.099609C39 23.201458 39.508187 22.20631 40.177734 21.716797L42.566406 20.023438 A 1.50015 1.50015 0 0 0 43.142578 18.388672C42.268714 15.330149 40.629282 12.72451 38.611328 10.494141 A 1.50015 1.50015 0 0 0 36.890625 10.128906L34.191406 11.330078 A 1.50015 1.50015 0 0 0 34.171875 11.337891C33.328068 11.727352 32.340534 11.679608 31.412109 11.179688C30.5685 10.725435 30.060289 9.8909265 29.996094 8.9921875 A 1.50015 1.50015 0 0 0 29.992188 8.9550781L29.693359 5.8554688 A 1.50015 1.50015 0 0 0 28.513672 4.5332031C27.046895 4.2188938 25.542857 4 24 4 z M 24 7C24.913336 7 25.868726 7.178029 26.822266 7.3398438L27.003906 9.2070312C27.003906 9.2070312 27.003906 9.2089844 27.003906 9.2089844C27.140297 11.109529 28.23247 12.874877 29.988281 13.820312C31.659856 14.720391 33.67154 14.873051 35.427734 14.0625L37.019531 13.355469C38.239035 14.844925 39.199359 16.474788 39.851562 18.271484L38.433594 19.275391 A 1.50015 1.50015 0 0 0 38.417969 19.287109C36.889562 20.398683 36 22.199609 36 24.099609C36 25.928181 36.788721 27.827246 38.46875 28.947266L39.853516 29.931641C39.196311 31.75701 38.231604 33.410531 37.025391 34.847656L35.410156 34.128906L35.427734 34.138672C33.644966 33.315856 31.590913 33.443224 29.943359 34.404297C28.295806 35.36537 27.276436 37.062994 27.015625 38.888672 A 1.50015 1.50015 0 0 0 27.009766 38.933594L26.839844 40.460938C25.896438 40.623661 24.924092 40.800781 24 40.800781C23.084171 40.800781 22.126173 40.623556 21.169922 40.460938L20.996094 38.792969C20.860289 36.891708 19.76811 35.125436 18.011719 34.179688C16.340144 33.279609 14.32846 33.126949 12.572266 33.9375L10.980469 34.644531C9.760965 33.155075 8.8006424 31.525212 8.1484375 29.728516L9.5664062 28.724609 A 1.50015 1.50015 0 0 0 9.5820312 28.712891C11.110443 27.601321 12 25.800391 12 23.900391C12 22.071819 11.211279 20.172754 9.53125 19.052734L8.1464844 18.068359C8.8036885 16.24299 9.7683961 14.589469 10.974609 13.152344L12.589844 13.871094L12.572266 13.861328C14.355034 14.684144 16.409087 14.556776 18.056641 13.595703C19.704194 12.63463 20.723564 10.937006 20.984375 9.1113281 A 1.50015 1.50015 0 0 0 20.992188 9.0546875L21.169922 7.3378906C22.110575 7.1761157 23.079061 7 24 7 z M 24 16C19.599487 16 16 19.59949 16 24C16 28.40051 19.599487 32 24 32C28.400513 32 32 28.40051 32 24C32 19.59949 28.400513 16 24 16 z M 24 19C26.779194 19 29 21.220808 29 24C29 26.779192 26.779194 29 24 29C21.220806 29 19 26.779192 19 24C19 21.220808 21.220806 19 24 19 z" />
                                        </svg>
                                    </div>
                                    <div className='font-normal'>Settings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure >
        </div>
    </>

};


export default CardMobileDevie;
