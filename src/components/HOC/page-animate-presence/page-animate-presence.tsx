'use client'

import { FrozenRoute } from "@/components/HOC/frozen-route";
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from "react";

export const PageAnimatePresence = ({ children }:
                               {
                                 children: ReactNode
                               }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}
