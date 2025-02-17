'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { HeaderWidget } from "@/components/general";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { CardDesktopDevice, CardHalfAnimatedWidget, CardMeterWidget, CardMobileDevie } from "@/components/animated";
import 'swiper/css';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FooterWidget } from "@/components/general";

export default function Home() {


  const [priceEnabled, setPriceEnabled] = useState(false);
  const [videoPopup, showVideoPopup] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-y-auto");
  }, [])

  const handleImageError = () => {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };

  return (
    <>
      <main className="mb-20 lg:mb-40">
        <div className='shadow-md h-screen'>
          <HeaderWidget />
          <div className='pt-1 relative w-full flex flex-col justify-center items-center'>
            <div className="lg:hidden flex justify-center items-center" >
              <CardMobileDevie />
            </div>
            <div className="hidden lg:block" >
              <CardDesktopDevice />
            </div>



            <div className=" w-full shadow-akauntme-deep/20 mx-2 md:mx-auto lg:mx-6 px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 mt-10 rounded-3xl md:rounded-[2rem] z-[-10]" >
              <h1 data-aos="fade-up" className="mx-auto max-w-4xl font-display text-xl sm:text-2xl font-bold tracking-tight leading-[50px] 
                        text-slate-900 md:text-7xl">
                <div className="lg:whitespace-nowrap">
                  Akaunting <span className="relative z-3 lg:whitespace-nowrap text-akauntme-deep">
                    <svg aria-hidden="true" viewBox="0 0 418 42"
                      className="absolute left-0 top-2/3 h-[0.58em] w-full fill-akauntme-deep" preserveAspectRatio="none">
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="">made simple </span>
                  </span>
                  for
                </div>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}

                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper m-0 p-0"
                >

                  <SwiperSlide className="m-0 p-0"> <span className='text-akauntme'>businesses</span></SwiperSlide>
                  <SwiperSlide className="m-0 p-0"> <span className='text-akauntme'>personal use</span></SwiperSlide>

                </Swiper>


              </h1>


              <div className="mt-10 flex justify-center gap-x-6" data-aos="fade-up" data-aos-delay="200">
                <Link className="group text-xs sm:text-sm lg:text-xl inline-flex shadow-md hover:translate-y-0.5 transition-transform items-center justify-center rounded-full py-2 md:py-3 px-7  font-semibold 
                            focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-r from-indigo-700 to-akauntme-deep text-white
                              hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                  color="slate" href="/register">Get Started.</Link>

                <button className="group text-xs sm:text-base lg:text-xl inline-flex shadow-md hover:translate-y-0.5 transition-transform ring-1 items-center justify-center rounded-full py-2 md:py-3 px-7  
                            focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 bg-white hover:ring-slate-300 
                            active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                  color="slate" onClick={() => showVideoPopup(!videoPopup)}>
                  <svg className="h-3 w-3 flex-none fill-akauntme-deep group-active:fill-current">
                    <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
                  </svg>
                  <span className="ml-3  text-akauntme-deep">See how?</span>
                </button>
              </div>



            </div>
            <motion.div

              animate={videoPopup ? "open" : "closed"}


              style={{ opacity: 0 }}
              variants={{
                open: {
                  opacity: 1,
                  x: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.3,
                    delay: 0.2,
                  }
                },
                closed: {
                  opacity: 0,
                  x: 0,
                  scale: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.3,
                  }
                }
              }}
              className='fixed shadow-md w-full shadow-akauntme-deep z-[3000] top-40 mx-4 max-w-[700px] min-h-[400px] p-3 bg-white rounded-lg'>
              <button onClick={() => showVideoPopup(!videoPopup)} className='absolute -top-4 -right-2 rounded-full size-10  border-2 border-transparent hover:border-white transition-all bg-akauntme hover:bg-akauntme-deep text-white text-2xl'>
                &times;
              </button>
              <video src="" className='w-full'></video>
            </motion.div>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-akauntme via-akauntme-deep to-akauntme-2 h-screen z-[5] relative">
          <div className="pt-[250px] lg:pt-[320px] flex justify-center flex-col items-center">

            <div>

              <button className="relative px-6 py-2 rounded-full bg-gradient-to-r 
          from-akauntme via-akauntme-2 to-akauntme
             text-white font-bold shadow-lg hover:shadow-xl 
             backdrop-filter backdrop-blur-lg bg-opacity-30 
             border border-white/20">
                Get Started
              </button>
            </div>


            <h1 className="mt-10 text-2xl md:text-3xl text-white lg:text-5xl lg:w-[600px] font-semibold lg:tracking-wide text-center leading-10 lg:leading-[3rem]">
              The modern accounting platform for your business
            </h1>
            <p className="mt-10 w-[280px] font-normal text-white lg:w-[500px] text-center">
              We&apos;re eliminating the friction and bias of traditional financing, making business owners to smartly keep track of their business inventories with ease.
            </p>

          </div>
        </div>

        <div className="bg-white h-screen">
          <div className="pt-[100px] lg:pt-[200px] text-center flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl text-center font-semibold tracking-wide text-akauntme">Faster. Smarter . Easy</h1>
            <p className="mt-10 w-[300px] md:w-[400px] lg:w-[600px] lg:leading-7 text-sm sm:text-base md:text-xl text-akauntme/90">
              Use any of your social media login integration, lower user friction, and facilitate more transactions.
            </p>

            <div className="mt-20 mx-5 lg:mx-30 lg:px-20 relative px-6 py-2 rounded-xl bg-gradient-to-r 
          from-akauntme to-akauntme-2 h-[50vh] lg:h-[60vh]
             text-white shadow-lg hover:shadow-xl gap-y-10 lg:gap-y-0
             backdrop-filter backdrop-blur-lg bg-opacity-30 
             border border-white/20 flex flex-col lg:flex-row  justify-center items-center">
              <div className="w-full lg:w-6/12">
                <h1 className="text-center md:text-left text-xl md:text-2xl lg:text-4xl">Optimized for ease of use</h1>
                <p className="text-left mt-5 md:mt-10 lg:w-[420px] lg:leading-6 font-ligt">
                  Akauntme was designed with focus on user-friendly and security of your business data, the system
                  employs robust double layer encryption protocols, regular security updates, and advanced authentication
                  measures to ensure a highly secure environment.
                </p>

              </div>
              <div className="w-full hidden lg:block lg:w-6/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.

              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-akauntme via-akauntme-deep to-akauntme-2 h-[70vh] lg:mt-[300px]">
          <div className="mx-5 lg:mx-30 lg:px-20 text-center flex justify-center items-center pt-20">
            <div className="flex  flex-col justify-center items-center gap-y-10">
              <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-white lg:w-[800px]">
                More than just a bookkeepping platform for business
              </h1>
              <p className="text-white lg:w-[600px] text-base md:text-xl lg:leading-7">
                It goes beyond just a bookkeepping secure service for your business, offering a multifaceted solution with additional
                features and functionalities to enhance overall business performance.
              </p>


              <div>

                <button className="relative px-6 py-2 rounded-full bg-gradient-to-r 
from-akauntme via-akauntme-2 to-akauntme
text-white font-bold shadow-lg hover:shadow-xl 
backdrop-filter backdrop-blur-lg bg-opacity-30 
border border-white/20 tracking-wider">
                  Launch now

                  <svg className="size-7 -top-2 right-0 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="eTt4_F5~sRFQTjUQtW5_ya" x1="7.4" x2="11.6" y1="36.724" y2="43.192" gradientTransform="rotate(45.001 9 39)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a" /><stop offset=".443" stopColor="#ee3d4a" /><stop offset="1" stopColor="#e52030" /></linearGradient><path fill="url(#eTt4_F5~sRFQTjUQtW5_ya)" d="M11.121,41.121c-1.172,1.172-6.243,2-6.243,2s0.828-5.071,2-6.243c1.172-1.172,3.071-1.172,4.243,0C12.293,38.05,12.293,39.95,11.121,41.121z" /><linearGradient id="eTt4_F5~sRFQTjUQtW5_yb" x1="7.043" x2="9.8" y1="40.957" y2="38.2" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffcf7b" /><stop offset=".195" stopColor="#fecd76" /><stop offset=".439" stopColor="#fac666" /><stop offset=".71" stopColor="#f3bc4d" /><stop offset=".997" stopColor="#eaad29" /><stop offset="1" stopColor="#eaad29" /></linearGradient><path fill="url(#eTt4_F5~sRFQTjUQtW5_yb)" d="M10.121,40C9.536,40.586,7,41,7,41s0.414-2.536,1-3.121c0.586-0.586,1.536-0.586,2.121,0C10.707,38.464,10.707,39.414,10.121,40z" /><path fill="#199be2" d="M12.066,38.707l-2.773-2.773c-0.352-0.352-0.391-0.909-0.093-1.307l2.48-3.306l5,5l-3.306,2.48C12.975,39.099,12.418,39.059,12.066,38.707z" /><path fill="#50e6ff" d="M41.747,5.055C39.595,5.208,35.211,5.789,33,8l-0.828,0.828l7,7L40,15c2.211-2.211,2.792-6.595,2.945-8.747C42.994,5.568,42.432,5.006,41.747,5.055z" /><rect width="31.113" height="9.899" x="9.944" y="17.55" fill="#35c1f1" transform="rotate(-45.001 25.5 22.5)" /><path fill="#50e6ff" d="M11,30l-0.414,0.414c-0.781,0.781-0.781,2.047,0,2.828l4.172,4.172c0.781,0.781,2.047,0.781,2.828,0L18,37L11,30z" /><circle cx="30.5" cy="17.5" r="3.5" fill="#50e6ff" /><circle cx="30.5" cy="17.5" r="2.5" fill="#0078d4" /><circle cx="23.5" cy="24.5" r="3.5" fill="#50e6ff" /><circle cx="23.5" cy="24.5" r="2.5" fill="#0078d4" /><path fill="#199be2" d="M24,31v6.757c0,0.796-0.316,1.559-0.879,2.121L20,43l-2-6L24,31z" /><path fill="#199be2" d="M17,24h-6.757c-0.796,0-1.559,0.316-2.121,0.879L5,28l6,2L17,24z" /></svg>
                </button>
              </div>

            </div>


          </div>

        </div>

      </main>
      <FooterWidget />

    </>

  );
}
