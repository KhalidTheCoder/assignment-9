import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import paypal from "../assets/accepts-paypal.png";
import secure from "../assets/secure-payment5.jpg";
import discount from "../assets/discount-2345221_1280.png";
import desco from "../assets/desco.png";
import digital from "../assets/digital.jpg";
import cashBack from "../assets/pngtree-cashback.png";
import OrgCard from "../components/OrgCard";
import Featured from "../components/Featured";
import Steps from "../components/Steps";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 my-20 mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <img
              src={paypal}
              alt="PayPal Slide"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={secure}
              alt="Secure Payment Slide"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={discount}
              alt="Discount Slide"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={desco}
              alt="Desco"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={digital}
              alt="Digital Easy Payment"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={cashBack}
              alt=""
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* card */}
      <div className="pt-16 pb-10 w-11/12 mx-auto">
        <OrgCard />
      </div>

      {/*  */}

      <div className="bg-gray-50 mt-10 mx-auto">
        <Featured></Featured>
        <div className="py-10">
          <Steps></Steps>
          <Testimonial></Testimonial>
        </div>
        <div>
          <h1 className="text-4xl text-black font-bold text-center mb-5">
            Why Choose Us?
          </h1>
          <WhyChooseUs></WhyChooseUs>
        </div>
      </div>
    </div>
  );
};

export default Home;
