import { WaveHandIcon } from "@/components/UI/wave-hand-icon";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <div className={'flex flex-col'}>
      <Swiper
        centeredSlides={true}
        className={"w-full"}
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide className={" flex justify-center items-center "}><GroupsOutlinedIcon className={'text-[8rem]'}/></SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}><GroupsOutlinedIcon className={'text-[8rem]'}/></SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}><GroupsOutlinedIcon className={'text-[8rem]'}/></SwiperSlide>

        <div className={'relative flex items-center'}>
          <Link
            className={'flex mx-auto items-center w-fit h-7 text-[0.55rem] font-light min-h-8 p-2 pl-4 pr-4 bg-white bg-opacity-45 border-solid border border-opacity-10 border-white rounded-full'}
            href={"#"}
          >
            See details
          </Link>
          <WaveHandIcon className={'absolute right-0 w-7 h-7 bg-white bg-opacity-45 border-solid border border-opacity-10 border-white rounded-full'}/>
        </div>
      </Swiper>
    </div>
  )
}