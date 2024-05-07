"use client"

import { SkeletonBody } from "@/components/UI/skeleton-body";
import { ChartSection } from "@/components/charts-section";
import { LeadsboardSection } from "@/components/leaderboard-section";
import { AsideMenu } from "@/components/shared/aside-menu"
import { Header } from "@/components/shared/header";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import React from "react";

//TODO CHANGE FONT WEIGHT
export default function Home() {
  const isDesktop = useBetterMediaQuery('(min-width: 908px)')

  if(isDesktop == null) {
    return (
      <SkeletonBody/>
    )
  }

  return (
    <>
      <AsideMenu isDesktop={isDesktop}/>
      <main className={'flex flex-col flex-1 gap-6 sm:gap-12 w-full pl-4 lg:pl-8 pr-4 lg:pr-8 pt-10 pb-16'}>
        <Header/>
        <div className={'flex flex-col md:flex-row justify-between h-full gap-8 md:gap-4 xl:gap-6 2xl:gap-8'}>
          <ChartSection/>
          <LeadsboardSection/>
        </div>
      </main>
    </>
  );
}
