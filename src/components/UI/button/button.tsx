import { twMerge } from "tailwind-merge";

export const Button = ({children, classNames='', isActive=false, onClick}:
                  {
                    children?: React.ReactNode,
                    classNames?: string,
                    isActive?: boolean,
                    onClick?: () => void,
                  }) => {
  return (
    <div
      className={twMerge(`flex justify-center items-center h-12 w-full text-sm rounded-full ease-in-out transition-all ${isActive ? "text-white shadow-2xl shadow-light-purple bg-gradient-blue" : "bg-[#f1f0f2] text-primary"} ` + classNames)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
