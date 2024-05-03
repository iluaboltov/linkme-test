import WavingHandIcon from "@mui/icons-material/WavingHand";
import { twMerge } from "tailwind-merge";

export const WaveHandIcon = ({className}:
                               {
                                 className: string,
                               }) => {
  return (
    <div className={twMerge("flex justify-center items-center " + className)}>
      <span className={'flex items-center w-[14px] h-[14px] z-10 ml-1'}>
        <WavingHandIcon className={'-scale-x-[1] text-[#fad747] rotate-12'} sx={{fontSize: "0.875rem"}} />
      </span>
      <span className={'flex items-center w-[14px] h-[14px] absolute'}>
        <WavingHandIcon className={'-scale-x-[1] text-[#d07132] rotate-12 '} sx={{fontSize: "0.875rem"}} />
      </span>
    </div>
  )
}