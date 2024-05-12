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
        className="h-full w-full bg-gradient-to-b to-white from-[#908C8D]"
      >
        <SwiperSlide>
          <video
            width="720"
            height="240"
            autoPlay
            loop            
            className="h-full w-full object-cover"
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
            className="h-full w-full object-cover"
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
            preload="auto"
            muted            
            className="h-full w-full object-cover"
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
