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
      className={twMerge(`flex justify-center items-center h-8 lg:h-12 w-full text-xs lg:text-sm text-primary rounded-full ease-in-out transition-all ${isActive ? "text-white shadow-2xl shadow-light-purple bg-gradient-blue" : "bg-[#f1f0f2] text-primary"} ` + classNames)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
