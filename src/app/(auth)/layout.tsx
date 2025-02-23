'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import {
  PersonalFinanceSvg,
  BusinessFinanceSvg,
  OverwhelmingSvg,
} from '@/components/icons'
import { useEffect } from 'react'
const Authlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  useEffect(() => {
    document.body.classList.remove('overflow-y-auto')
    document.body.classList.add('overflow-hidden')
  }, [])
  return (
    <section className="min-h-screen flex flex-col lg:flex-row py-6 sm:py-10 mx-2  overflow-hidden">
      <article className="w-full lg:w-6/12">{children}</article>
      <article className="hidden lg:block w-full lg:w-6/12">
        <div className="bg-akauntme-deep h-[92vh] rounded-lg">
          <div className="flex justify-center items-center text-white py-10">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="text-center h-[80vh]">
                  <h2 className="text-2xl font-semibold">
                    Get Akauntme for Personal Use:
                  </h2>
                  <div className="flex justify-center mt-10">
                    <p className="font-[400] max-w-[600px] text-center leading-7">
                      Take control of your finances and time like never before
                      with Akauntme! Budget effortlessly, track expenses
                      seamlessly, and achieve your goals with ease. It is your
                      personal finance and productivity companion, helping you
                      thrive in every aspect of life.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <PersonalFinanceSvg />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center h-[80vh]">
                  <h2 className="text-2xl font-semibold">
                    Get Akauntme for Business Use:
                  </h2>
                  <div className="flex justify-center mt-10">
                    <p className="font-[400] max-w-[600px] text-center leading-7">
                      Elevate your business to new heights with Akauntme! By
                      getting all your Bookkeeping workload From sales tracking
                      to expense management, our all-in-one solution streamlines
                      your operations and maximizes profitability. Stay ahead of
                      the curve with powerful insights and effortless
                      organization.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <OverwhelmingSvg />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center h-[80vh]">
                  <h2 className="text-2xl font-semibold">
                    Get Akauntme for Both Personal and Business package:
                  </h2>
                  <div className="flex justify-center mt-10">
                    <p className="font-[400] max-w-[600px] text-center leading-7">
                      From paycheck to profit, Akauntme has you covered! Manage
                      your money smarter, schedule like a pro, and watch your
                      success soar. Whether you{"'"}re running a business or
                      planning your next big adventure, Akauntme is your
                      ultimate accountability partner.
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <BusinessFinanceSvg />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Authlayout
