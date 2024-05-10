import { MenuItem } from "@/components/UI/menu-item";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const AsideMobile = () => {
  const [isActive, setActive] = useState(0)
  const [isOpened, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpened]);
  return (
    <>
      <MenuIcon className={'absolute left-2 top-2 fill-gray-400'} onClick={()=> setIsOpen(prevState => !prevState)}/>
      <motion.div
        animate={isOpened ? {
          display: "block",
          opacity: 1,
          zIndex: 1000,
        } : {
          opacity: 0,
          transitionEnd: {
            display: "none"
          },
          zIndex: -10,
        }
        }
        className={'flex'}>
        <aside
          className={`absolute ${isOpened ? "z-[100] overflow-hidden" : "-z-[1]"} left-0 top-0 z-50 flex flex-col justify-between h-full bg-gradient-grey pl-4 sm:pl-12 pr-4 sm:pr-6 pt-6 sm:pt-10 pb-12 sm:pb-16`}>
          <div>
            <div className={"relative w-[146px] h-[35px] md:w-[253px] md:h-[31px]"}>
              <Image
                alt={"Linkme"}
                className={"object-contain"}
                fill
                src={"images/company_name.svg"}
              />
            </div>

            {/*TODO CHANGE ICONS*/}
            <nav className={"flex flex-col h-full mt-4 sm:mt-12 gap-0.5 md:gap-4"}>
              <MenuItem
                className={`${isActive === 1 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(0);
                }}
              >
                <HomeOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Home
                </span>
              </MenuItem>

              <MenuItem
                className={`${isActive === 0 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(1);
                }}
              >
                <CalendarTodayOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                 Events
                </span>
              </MenuItem>


              <MenuItem
                className={`${isActive === 2 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(2);
                }}
              >
                <CampaignOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Leads
                </span>
              </MenuItem>

              <MenuItem
                className={`${isActive === 3 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(3);
                }}
              >
                <GroupsOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Team
                </span>
              </MenuItem>

              <MenuItem
                className={`${isActive === 4 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(4);
                }}
              >
                <PaidOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Team incentive
                </span>
              </MenuItem>

              <MenuItem
                className={`${isActive === 5 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(5);
                }}
              >
                <AssignmentOutlinedIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Plans / Upgrade
                </span>
              </MenuItem>

              <MenuItem
                className={`${isActive === 6 ? "text-primary" : ""}`}
                href={"#"}
                onClick={() => {
                  setIsOpen(prevState => !prevState)
                  setActive(6);
                }}
              >
                <HelpOutlineIcon
                  sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
                <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                  Support
                </span>
              </MenuItem>
            </nav>
          </div>

          <div>
            <MenuItem
              className={`${isActive === 7 ? "text-primary" : ""}`}
              href={"#"}
              onClick={() => {
                setIsOpen(prevState => !prevState)
                setActive(7);
              }}
            >
              <PersonAddAlt1OutlinedIcon
                sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.8rem" } }} />
              <span className={"tracking-wide text-[0.8rem] sm:text-xs md:text-lg 2xl:text-xl "}>
                Invite people
              </span>
            </MenuItem>
          </div>
        </aside>
        <div className={"absolute w-full h-full z-[99] bg-black/80"}
             onClick={() => setIsOpen(prevState => !prevState)}>
        </div>
      </motion.div>
    </>
  )
}