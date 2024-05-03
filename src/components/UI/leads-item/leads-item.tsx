import { DefaultUserRecord } from "@/types/userRecord";
import Image from "next/image"

export const LeadsItem = ({ company, jobTitle, leads, name, place, profilePic, }:
                     {
                       leads: number
                       place: number
                     } &
                     Omit<DefaultUserRecord, "leads">) => {
  return (
    <div className={"flex gap-2 w-full flex-1 p-2 items-center"}>
      <span className={"text-primary"}>{place}</span>
      <Image
        alt={'User Profile'}
        className={"w-8 h-8 rounded-full bg-light-blue"}
        height={32}
        src={profilePic}
        width={32}
      />
      <div className={"flex flex-col flex-1 gap-1 justify-center"}>
        <div className={"flex w-full justify-between items-center"}>
          <div className={"flex flex-col text-sm"}>
            <span className={"text-primary"}>{name}</span>
            <span className={"text-secondary"}>{company} / {jobTitle}</span>
          </div>
          <div className={"flex flex-col justify-center items-center min-w-[4.5rem] h-10 leading-none bg-light-blue rounded-full text-sm"}>
            <span className={"text-primary"}>{leads}</span>
            <span className={"text-secondary"}>Leads</span>
          </div>
        </div>
        <span className={"w-full h-1.5 bg-light-blue rounded-full"}></span>
      </div>
    </div>
  )
}