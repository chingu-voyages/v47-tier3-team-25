'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from './Button';

const VideoCarousels = () => {
  return (
    <>
      <Swiper
        // pagination={{
        //   clickable: true,
        // }}
        crossFade="true"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        className=" "
      >
        <SwiperSlide>
          <video
            width="720"
            height="240"
            // controls
            autoPlay
            loop
            className=" w-[90vw] mx-auto h-[500px] bg-cover"
            preload="auto"
          >
            <source
              src="/videos/lamborgini_by_Video_by_Mustafa_Akkuş.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            width="720"
            height="240"
            // controls
            autoPlay
            loop
            className="w-[90vw] mx-auto h-[500px] bg-cover"
            // preload="auto"
          >
            <source
              src="/videos/Pickup_truck_Video_by_Jorge_Zaldívar_Marroquín.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            width="720"
            height="240"
            // controls
            autoPlay
            loop
            className="w-[90vw] h-[500px] mx-auto"
            // preload="none"
            src="/videos/RR_Video_by_Ammad_Rasool.mp4"
          >
            <source
              src="/videos/FerrariVideo_by_Yash_Rao.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default VideoCarousels;
