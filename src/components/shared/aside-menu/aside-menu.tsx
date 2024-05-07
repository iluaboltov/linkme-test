"use client"

import { AsideDesktop } from "@/components/aside-desktop/aside-desktop";
import { AsideMobile } from "@/components/aside-mobile/aside-mobile";
import React from "react";

//TODO Change Logic of isActive state
export const AsideMenu = ({isDesktop}:
                            {
                              isDesktop: boolean
                            }) => {
  if (isDesktop) {
    return <AsideDesktop/>
  }

  return <AsideMobile/>
}