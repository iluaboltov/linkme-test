import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { v4 as uuidv4} from "uuid"

export const DropdownText = ({labels}:
                               {
                                 labels: string[]
                               }) => {
  const [isActive, setActive] = useState(false)
  const [activeLabel, setActiveLabel] = useState(labels[0])
  return (
    <div className={'relative inline-flex flex-col justify-center items-center text-blue transition-all ease-in-out z-10'} onClick={() => setActive(!isActive)}>
      <span>{activeLabel}<KeyboardArrowDownIcon sx={{ fontSize: {md: 32}}}/></span>
      <div className={`absolute left-0 top-0 translate-y-1/2 flex flex-col gap-1 bg-white rounded-md ${isActive ? "visible" : "hidden"}`}>
        {labels.map((label)=>{
          if(label==activeLabel) return;
          return (
            <span key={uuidv4()} onClick={() => setActiveLabel(label)}>{label}</span>
          )
        })}
      </div>
    </div>
  )
}