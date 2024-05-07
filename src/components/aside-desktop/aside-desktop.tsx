import { MenuItem } from "@/components/UI/menu-item";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Image from "next/image";
import React, { useState } from "react";

export const AsideDesktop = () => {
  const [isActive, setActive] = useState(0)

  return (
    <aside
      className={'flex flex-col justify-between bg-gradient-grey pl-6 lg:pl-8 xl:pl-10 4xl:pl-12 pr-4 sm:pr-6 xl:pr-4 pt-6 sm:pt-10 pb-12 sm:pb-16'}>
      <div>
        <div className={'relative w-[96px] h-[16px] md:w-[160px] md:h-[20px] xl:w-[190px] xl:h-[24px] 2xl:w-[253px] 2xl:h-[31px]'}>
          <Image
            alt={'Linkme'}
            className={'object-contain'}
            fill
            src={'images/company_name.svg'}
          />
        </div>

        {/*TODO CHANGE ICONS*/}
        <nav className={'flex flex-col mt-4 md:mt-8 lg:mt-12 gap-0.5 md:gap-4'}>
          <MenuItem
            className={`${isActive === 1 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(1)}
          >
            <HomeOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
                Home
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 0 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(0)}
          >
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
                Events
              </span>
          </MenuItem>


          <MenuItem
            className={`${isActive === 2 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(2)}
          >
            <CampaignOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
                Leads
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 3 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(3)}
          >
            <GroupsOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
                Team
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 4 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(4)}
          >
            <PaidOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
              Team incentive
            </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 5 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(5)}
          >
            <AssignmentOutlinedIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
              Plans / Upgrade
            </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 6 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={() => setActive(6)}
          >
            <HelpOutlineIcon
              sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
            <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
              Support
            </span>
          </MenuItem>
        </nav>
      </div>

      <div>
        <MenuItem
          className={`${isActive === 7 ? 'text-primary' : ''}`}
          href={'#'}
          onClick={() => setActive(7)}
        >
          <PersonAddAlt1OutlinedIcon
            sx={{ fontSize: { lg: "1.75rem", md: "1.4rem", sm: "0.875rem", xl: "1.875rem", xs: "0.75rem" } }} />
          <span className={'tracking-wide text-[0.6rem] sm:text-xs md:text-base lg:text-lg 2xl:text-xl '}>
            Invite people
          </span>
        </MenuItem>
      </div>
    </aside>
  )
}