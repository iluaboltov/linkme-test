import WavingHandIcon from "@mui/icons-material/WavingHand";
import { twMerge } from "tailwind-merge";

export const WaveHandIcon = ({className}:
                               {
                                 className: string,
                               }) => {
  return (
    <div className={twMerge("flex justify-center items-center  aspect-square " + className)}>
        <WavingHandIcon className={'-scale-x-[1] text-[#fad747] rotate-12 z-10 ml-1'} sx={{ fontSize: { sm: "0.875rem", md: "1.25rem", lg: "1.5rem", xl: "1.75rem"}}} />
        <WavingHandIcon className={'-scale-x-[1] text-[#d07132] rotate-12 absolute'} sx={{ fontSize: { sm: "0.875rem", md: "1.25rem", lg: "1.5rem", xl: "1.75rem"}}} />
    </div>
  )
}