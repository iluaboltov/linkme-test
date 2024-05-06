'use client'

import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ReactNode, useContext, useRef } from "react";

export const FrozenRoute = ({ children }:
                       {
                         children: ReactNode
                       }) => {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}