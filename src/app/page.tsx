"use client"

import { ChartSection } from "@/components/charts-section";
import { LeadsboardSection } from "@/components/leaderboard-section";
import { AsideMenu } from "@/components/shared/aside-menu";
import { Header } from "@/components/shared/header";

//TODO CHANGE FONT WEIGHT
export default function Home() {
  return (
    <>
      <AsideMenu />
      <main className={'flex flex-col flex-1 gap-6 sm:gap-12 w-full pl-8 pr-8 pt-10 pb-16'}>
        <Header/>
        <div className={'flex flex-col sm:flex-row justify-between h-full gap-4 lg:gap-8'}>
          <ChartSection/>
          <LeadsboardSection/>
        </div>
      </main>
    </>
  );
}
