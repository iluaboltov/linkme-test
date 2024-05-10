import getUsers from "@/api/getSortedUser";
import { Button } from "@/components/UI/button";
import { Card } from "@/components/UI/card";
import { LeadsItem } from "@/components/UI/leads-item";
import { Skeleton } from "@/components/UI/skeleton";
import { SkeletonButton } from "@/components/UI/skeleton-button";
import { SkeletonLeadsItem } from "@/components/UI/skeleton-leads-item";
import { SkeletonSearch } from "@/components/UI/skeleton-search";
import { LeadsTimeRange } from "@/enums/LeadsTimeRange";
import { SortedUserRecord, UserRecord } from "@/types/userRecord";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Search } from "../UI/search";

// TODO SORT AND SEARCH
export const LeadsboardSection = () => {
  const [timeRange, setTimeRange] = useState<LeadsTimeRange>(LeadsTimeRange.Sevendays)
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState<SortedUserRecord | null>(null)
  const [activeUsersRange, setActiveUsersRange] = useState<UserRecord[] | null>(null)
  const [foundUsers, setFoundUsers] = useState<UserRecord[] | null>(null)
  const [ascDesc, setAscDesc] = useState<"ASC" | "DESC">('ASC')

  useEffect(()=>{
    setLoading(true)
    getUsers().then((data)=>{
      setUsers(data)
    })
    setLoading(false)
  }, [])

  useEffect(() => {

    if (!users) return;

    const activeData = users[timeRange]
    setActiveUsersRange(activeData)
  }, [users, timeRange]);

  // TODO RESPONSIVENESS
  if(isLoading || !users) {
    return (
      <section className={'flex flex-col flex-1 w-full gap-2'}>
        <Card className={'flex flex-1 flex-col gap-2 p-2 h-full'}>
          <SkeletonSearch/>
          <div className={'flex gap-1'}>
            <Skeleton count={4}>
              <SkeletonButton/>
            </Skeleton>
          </div>
          <div className={'flex flex-1 flex-col justify-between'}>
            <Skeleton count={10}>
              <SkeletonLeadsItem/>
            </Skeleton>
          </div>
        </Card>
      </section>
    )
  }

  return (
    <section className={'flex flex-col flex-1 h-full lg:min-w-80 max-w-[60rem] gap-4'}>
      <Search changeSort={setAscDesc} onChange={setFoundUsers} sort={ascDesc} users={activeUsersRange}/>
      <Card className={'flex flex-col h-full gap-4 p-4'}>
        <h2 className={'text-2xl md:text-lg lg:text-xl text-secondary'}>Top Performers</h2>
        <div className={'flex h-full flex-col gap-4'}>
          <div className={"flex justify-around gap-2"}>
            <Button
              isActive={timeRange == LeadsTimeRange.Sevendays}
              onClick={() => setTimeRange(LeadsTimeRange.Sevendays)}>7 days</Button>
            <Button
              isActive={timeRange == LeadsTimeRange.Fourteendays}
              onClick={() => setTimeRange(LeadsTimeRange.Fourteendays)}>14 days</Button>
            <Button
              isActive={timeRange == LeadsTimeRange.Thirtydays}
              onClick={() => setTimeRange(LeadsTimeRange.Thirtydays)}>30 days</Button>
            <Button
              isActive={timeRange == LeadsTimeRange.Sixtydays}
              onClick={() => setTimeRange(LeadsTimeRange.Sixtydays)}>60 days</Button>
          </div>
          <div className={`flex flex-1 flex-col gap-4 md:gap-0 ${foundUsers ? '': 'justify-between'} `}>
            {
              foundUsers ?
                foundUsers?.map((user, index) => {
                  let rate = 0
                  if(activeUsersRange) {
                    rate = activeUsersRange[0].leads
                  }

                  if (index >= 10) return;
                  return (
                    <LeadsItem
                      company={user.company}
                      jobTitle={user.jobTitle}
                      key={uuidv4()}
                      leads={user.leads}
                      name={user.name}
                      place={index+1}
                      profilePic={user.profilePic}
                      rate={rate}
                    />
                  )
                })
                : activeUsersRange?.map((user, index) => {
                  let rate = 0

                  if(activeUsersRange) {
                    rate = activeUsersRange[0].leads
                  }

                  if (index >= 10) return;

                  return (
                    <LeadsItem
                      company={user.company}
                      jobTitle={user.jobTitle}
                      key={uuidv4()}
                      leads={user.leads}
                      name={user.name}
                      place={index+1}
                      profilePic={user.profilePic}
                      rate={rate}
                    />
                  )
                })
            }
          </div>
        </div>
      </Card>
    </section>
  )
}