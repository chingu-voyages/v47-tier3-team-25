'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const VideoCarousels = () => {
  return (
    <>
      <Swiper
        crossFade="true"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        className=" h-[800px] bg-gradient-to-b to-white from-[#908C8D]"
      >
        <SwiperSlide>
          <video
            width="720"
            height="240"
            autoPlay
            loop
            // className=" w-[100%] mx-auto lg:h-[90%] bg-cover rounded-[14%]"
            className=" w-[100%] h-[100%] mx-auto bg-cover"
            preload="auto"
            muted
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
            autoPlay
            loop
            // className="w-[100%] mx-auto lg:h-[90%] bg-cover rounded-[14%]"
            className=" w-[100%] mx-auto lg:h-[100%] bg-cover"
            preload="auto"
            muted
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
            autoPlay
            loop
            // className="w-[100%] lg:h-[90%] rounded-[14%] mx-auto"
            className=" w-[100%] mx-auto lg:h-[100%] bg-cover"
            preload="auto"
            muted
          >
            <source
              src="/videos/RR_Video_by_Ammad_Rasool.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default VideoCarousels;
