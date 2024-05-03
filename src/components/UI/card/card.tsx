import { twMerge } from "tailwind-merge";

export const Card = ({children,className}:
                {
                  children: React.ReactNode,
                  className?: string,
                }) => {
  return (
    <div className={twMerge('bg-white rounded-2xl shadow-md ' + className)}>
      {children}
    </div>
  )
}