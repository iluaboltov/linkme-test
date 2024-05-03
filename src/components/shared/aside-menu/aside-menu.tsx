"use client"
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
import { useState } from "react";

//TODO Change Logic of isActive state
export const AsideMenu = () => {
  const [isActive, setActive] = useState(0)
  return (
    <aside className={'flex flex-col justify-between bg-gradient-grey pl-6 pr-4 pt-10 pb-16'}>
      <div>
        <div>
          <Image
            alt={'Linkme'}
            height={31}
            src={'images/company_name.svg'}
            width={253}
          />
        </div>

        {/*TODO CHANGE ICONS*/}
        <nav className={'flex flex-col mt-6 '}>
          <MenuItem
            className={`${isActive === 0 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(0)}
          >
            <HomeOutlinedIcon />
            <span>
                Events
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 1 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(1)}
          >
            <CalendarTodayOutlinedIcon />
            <span>
                Home
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 2 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(2)}
          >
            <CampaignOutlinedIcon />
            <span>
                Leads
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 3 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(3)}
          >
            <GroupsOutlinedIcon />
              <span>
                Team
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 4 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(4)}
          >
            <PaidOutlinedIcon />
            <span>
                Team incentive
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 5 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(5)}
          >
            <AssignmentOutlinedIcon />
            <span>
                Plans / Upgrade
              </span>
          </MenuItem>

          <MenuItem
            className={`${isActive === 6 ? 'text-primary' : ''}`}
            href={'#'}
            onClick={()=> setActive(6)}
          >
            <HelpOutlineIcon />
            <span>
                Support
              </span>
          </MenuItem>
        </nav>
      </div>

      <div>
        <MenuItem
          className={`${isActive === 7 ? 'text-primary' : ''}`}
          href={'#'}
          onClick={()=> setActive(7)}
        >
          <PersonAddAlt1OutlinedIcon />
          <span>Invite people</span>
        </MenuItem>
      </div>
    </aside>
  )
}