"use client"

import { ChartSection } from "@/components/charts-section";
import { LeadsboardSection } from "@/components/leaderboard-section";
import { AsideMenu } from "@/components/shared/aside-menu";
import { Header } from "@/components/shared/header";

//TODO CHANGE FONT WEIGHT
export default function Home() {
  return (
    <div className={'flex'}>
      <AsideMenu/>
      {/*TODO Make Gradient*/}
      <main className={'flex flex-col gap-6 w-full pl-4 pr-4 pt-10 pb-16'}>
          <Header/>
        <div className={'flex justify-between gap-4'}>
          <ChartSection/>
          <LeadsboardSection/>
        </div>
      </main>
    </div>
  );
}
