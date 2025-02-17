import React from 'react'

interface CardWidgetProps {
    className?: string;
    children: React.ReactNode;
}

const CardHalfAnimatedWidget: React.FC<CardWidgetProps> = ({ className }) => {
    return (
        <div className={`glassmorphism absolute ${className} rounded-lg pt-4 pl-4 pr-4 overflow-hidden`}>
            <div className='bg-white bottom-0 shadow-lg rounded-lg overflow-hidden p-2
            backdrop-filter backdrop-blur-lg flex flex-col items-start w-[300px] mx-auto gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <div className='bg-akauntme flex justify-center items-center w-10 rounded-sm py-0.5'>
                        <svg className='size-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M6.5 9C4.57 9 3 10.57 3 12.5L3 29.5C3 31.43 4.57 33 6.5 33L7 33L22.150391 33C22.320391 31.95 22.6 30.95 23 30L10.869141 30 A 4 4 0 0 0 7 25 A 4 4 0 0 0 6 25.132812L6 16.871094 A 4 4 0 0 0 7 17 A 4 4 0 0 0 10.869141 12L37.130859 12 A 4 4 0 0 0 41 17 A 4 4 0 0 0 42 16.867188L42 24.050781C43.14 24.770781 44.15 25.669219 45 26.699219L45 12.5C45 10.57 43.43 9 41.5 9L41 9L7 9L6.5 9 z M 24 15C21.24 15 19 17.69 19 21C19 24.31 21.24 27 24 27C24.28 27 24.560078 26.970156 24.830078 26.910156C25.820078 25.660156 27.039687 24.589063 28.429688 23.789062C28.789688 22.959062 29 22.01 29 21C29 17.69 26.76 15 24 15 z M 13 19 A 2 2 0 0 0 13 23 A 2 2 0 0 0 13 19 z M 35 19C33.9 19 33 19.9 33 21C33 21.41 33.120078 21.789375 33.330078 22.109375C33.880078 22.039375 34.43 22 35 22C35.57 22 36.119922 22.039375 36.669922 22.109375C36.879922 21.789375 37 21.41 37 21C37 19.9 36.1 19 35 19 z M 35 24C28.925 24 24 28.925 24 35C24 41.075 28.925 46 35 46C41.075 46 46 41.075 46 35C46 28.925 41.075 24 35 24 z M 31 28L39 28C39.553 28 40 28.448 40 29C40 29.552 39.553 30 39 30L39 32C39 33.2 38.457187 34.266 37.617188 35C38.457188 35.734 39 36.8 39 38L39 40C39.553 40 40 40.448 40 41C40 41.552 39.553 42 39 42L38 42L32 42L31 42C30.447 42 30 41.552 30 41C30 40.448 30.447 40 31 40L31 38C31 36.8 31.542813 35.734 32.382812 35C31.542813 34.266 31 33.2 31 32L31 30C30.447 30 30 29.552 30 29C30 28.448 30.447 28 31 28 z M 33 30L33 32L37 32L37 30L33 30 z M 35 36C33.897 36 33 36.897 33 38L33 39.611328L34.683594 39.050781C34.888594 38.982781 35.111406 38.982781 35.316406 39.050781L37 39.611328L37 38C37 36.897 36.103 36 35 36 z" fill="#ECE8E8" />
                        </svg>
                    </div>

                    <h4 className='font-normal text-gray-400'>Total Balance</h4>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <h1 className='font-semibold'>$15,0000</h1>
                    <div className='bg-akauntme/20 rounded-md text-akauntme px-2 text-center'>
                        +25%
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardHalfAnimatedWidget;