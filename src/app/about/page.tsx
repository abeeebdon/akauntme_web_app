import Link from 'next/link';
import { motion } from 'framer-motion';
import { FooterWidget, HeaderWidget } from "@/components/general";



export default function Page() {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <main>
                <div className='shadow-md'>
                    <HeaderWidget />
                </div>

                <div className='pt-24'>

                    <section className="relative py-20 overflow-hidden bg-white">
                        <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                            <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
                        </span>
                        <span className="absolute bottom-0 left-0"> </span>
                        <div className="relative px-16 mx-auto max-w-7xl">
                            <p className=" text-center text-2xl md:text-5xl font-extrabold tracking-wide text-akauntme-deep uppercase">
                                OUR TEAM
                            </p>
                            <h2 className="relative text-center  mt-5 mb-10 text-2xl font-semibold leading-tight lg:text-3xl">
                                An incredible team of <br />
                                amazing individuals
                            </h2>
                            <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Mark Okechukwu</h3>
                                            <p className="text-akauntme-deep">CEO and Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-07.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Carl Jones</h3>
                                            <p className="text-akauntme-deep text-[14px]">CTO and Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-20.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Susan Peterson</h3>
                                            <p className="text-akauntme-deep">Marketing Directory</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-09.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Tommy Barnes</h3>
                                            <p className="text-akauntme-deep">Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-14.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Ron Jenson</h3>
                                            <p className="text-akauntme-deep">Senior Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-13.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Pete Tompkins</h3>
                                            <p className="text-akauntme-deep">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-16.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Kelly Richards</h3>
                                            <p className="text-akauntme-deep">Sales Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                        <img
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-08.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Alexis Jordan</h3>
                                            <p className="text-akauntme-deep">Affiliate Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <FooterWidget />

            </main>
        </>
    );
}
