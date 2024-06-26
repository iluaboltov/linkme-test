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
          <GroupsOutlinedIcon className={'opacity-70'} sx={{ fontSize: {'@media (max-width: 639px)':{ fontSize: "6rem"}, lg: "12rem", md: "9rem", sm: "8rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}>
          <GroupsOutlinedIcon className={'opacity-70'} sx={{ fontSize: {'@media (max-width: 639px)':{ fontSize: "6rem"}, lg: "12rem", md: "9rem", sm: "8rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
        <SwiperSlide className={" flex justify-center items-center "}>
          <GroupsOutlinedIcon className={'opacity-70'} sx={{ fontSize: {'@media (max-width: 639px)':{ fontSize: "6rem"}, lg: "12rem", md: "9rem", sm: "8rem", xl: "13rem", xs: "8rem"} }} />
        </SwiperSlide>
      </Swiper>
      <div className={'relative flex mb-4 items-center'}>
        <Link
          className={'flex mx-auto items-center w-fit 2xs:text-[0.5rem] text-xs 2xl:text-sm 4xl:text-lg font-light 2xs:min-h-2.5 min-h-6 md:min-h-8 2xs:p-2 4xl:p-6 4xl:pl-8 4xl:pr-8 p-4 pl-6 pr-6 bg-white bg-opacity-20 border-solid border border-opacity-10 border-white rounded-full'}
          href={"#"}
        >
          See details
        </Link>
        <WaveHandIcon
          className={'absolute right-0 2xs:p-1 p-2 h-full bg-white bg-opacity-20 border-solid border border-opacity-10 border-white rounded-full'} />
      </div>
    </div>
  )
}