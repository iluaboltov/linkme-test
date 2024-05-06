import { WaveHandIcon } from "@/components/UI/wave-hand-icon";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <div className={'flex flex-col h-full justify-between'}>
      <Swiper
        centeredSlides={true}
        className={"w-full"}
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide className={" flex justify-center items-center "}>
          <GroupsOutlinedIcon sx={{ fontSize: { lg: "12rem", md: "9rem", sm: "6rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}>
          <GroupsOutlinedIcon sx={{ fontSize: { lg: "12rem", md: "9rem", sm: "6rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}>
          <GroupsOutlinedIcon sx={{ fontSize: { lg: "12rem", md: "9rem", sm: "6rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
      </Swiper>
      <div className={'relative flex mb-4 items-center'}>
        <Link
          className={'flex mx-auto items-center w-fit h-full sm:h-10 text-xs 2xl:text-sm font-light min-h-6 md:min-h-8 p-4 pl-6 pr-6 bg-white bg-opacity-20 border-solid border border-opacity-10 border-white rounded-full'}
          href={"#"}
        >
          See details
        </Link>
        <WaveHandIcon
          className={'absolute right-0 p-2 h-full bg-white bg-opacity-20 border-solid border border-opacity-10 border-white rounded-full'} />
      </div>
    </div>
  )
}