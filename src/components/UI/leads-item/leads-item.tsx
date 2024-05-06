import { DefaultUserRecord } from "@/types/userRecord";
import Image from "next/image"

export const LeadsItem = ({ company, jobTitle, leads, name, place, profilePic, rate}:
                     {
                       leads: number,
                       place: number,
                       rate: number,
                     } &
                     Omit<DefaultUserRecord, "leads">) => {
  const rateProgress= (leads/rate) * 100
  return (
    <div className={"flex gap-2 lg:gap-4 w-full p-1 items-center"}>
      <span className={"w-4 text-primary text-xs xl:text-lg 2xl:text-xl"}>{place}</span>
      <div className={'relative w-6 md:w-8 xl:w-10 2xl:w-12 aspect-square'}>
        <Image
          alt={'User Profile'}
          className={"rounded-full bg-light-blue object-contain"}
          fill
          src={profilePic}
        />
      </div>
      <div className={"flex flex-col flex-1 gap-1 justify-center"}>
        <div className={"flex w-full justify-between items-center"}>
          <div className={"flex flex-col text-xs lg:text-sm xl:text-lg 2xl:text-xl"}>
            <span className={"text-primary"}>{name}</span>
            <span className={"text-secondary"}>{company} / {jobTitle}</span>
          </div>
          <div className={"flex flex-col justify-center items-center min-w-[3rem] lg:min-w-[4.5rem] h-8 lg:h-12 bg-light-blue rounded-full leading-none "}>
            <span className={"text-primary  text-xs lg:text-sm xl:text-md 2xl:text-lg"}>{leads}</span>
            <span className={"text-secondary text-xs lg:text-sm xl:text-md 2xl:text-lg"}>Leads</span>
          </div>
        </div>
        <span className={"relative w-full h-1.5 bg-light-blue rounded-full"}>
          <span className={`absolute h-full bg-gradient-blue 
          rounded-full`} style={{width: `${rateProgress}%`}}></span>
        </span>
      </div>
    </div>
  )
}