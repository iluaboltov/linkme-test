import Link from "next/link";
import {twMerge} from "tailwind-merge"

export const MenuItem = ({children, className, href, onClick}:
                    {
                      children?: React.ReactNode,
                      className?: string,
                      href: string,
                      onClick?: () => void,
                    }) => {
  return(
    <Link
      className={twMerge('flex items-center gap-4 m-2 text-sm font-normal text-secondary transition-all ease-in-out ' + className)}
      href={href}
      onClick={onClick}
      >
      {children}
    </Link>
  )
}