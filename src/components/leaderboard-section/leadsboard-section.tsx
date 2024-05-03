import getUsers from "@/api/getSortedUser";
import { Button } from "@/components/UI/button";
import { Card } from "@/components/UI/card";
import { Search } from "@/components/UI/input";
import { LeadsItem } from "@/components/UI/leads-item";
import { Skeleton } from "@/components/UI/skeleton";
import { SkeletonButton } from "@/components/UI/skeleton-button";
import { SkeletonLeadsItem } from "@/components/UI/skeleton-leads-item";
import { SkeletonSearch } from "@/components/UI/skeleton-search";
import { LeadsChartTop } from "@/enums/LeadsChartTop";
import { SortedUserRecord, UserRecord } from "@/types/userRecord";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO SORT AND SEARCH
export const LeadsboardSection = () => {
  const [timeRange, setTimeRange] = useState<LeadsChartTop>(LeadsChartTop.Sevendays)
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState<SortedUserRecord | null>(null)
  const [activeUsersRange, setActiveUsersRange] = useState<UserRecord[] | null>(null)
  const [foundUsers, setFoundUsers] = useState<UserRecord[] | null>(null)
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
  }, [users]);
  useEffect(()=>{

    if (!users) return;

    const activeData = users[timeRange]
    setActiveUsersRange(activeData)

  }, [timeRange])

  // TODO RESPONSIVENESS
  if(isLoading || !users) {
    return (
      <section className={'flex flex-col flex-1 max-w-[30rem] gap-2'}>
        <SkeletonSearch/>
        <Card className={'p-2'}>
          <div className={'flex gap-1'}>
            <Skeleton count={4}>
              <SkeletonButton/>
            </Skeleton>
          </div>
          <div>
            <Skeleton count={10}>
              <SkeletonLeadsItem/>
            </Skeleton>
          </div>
        </Card>
      </section>
    )
  }

  return (
    <section className={'flex flex-col flex-1 min-w-80 max-w-[60rem] gap-4'}>
      <Search onChange={setFoundUsers} users={activeUsersRange}/>
      <Card className={'flex flex-col gap-4 p-4'}>
        <h2 className={'text-xl text-secondary'}>Top Performers</h2>
        <div className={'flex flex-col gap-4'}>
          <div className={"flex justify-around flex-1 gap-2"}>
            <Button
              isActive={timeRange == LeadsChartTop.Sevendays}
              onClick={() => setTimeRange(LeadsChartTop.Sevendays)}>7 days</Button>
            <Button
              isActive={timeRange == LeadsChartTop.Fourteendays}
              onClick={() => setTimeRange(LeadsChartTop.Fourteendays)}>14 days</Button>
            <Button
              isActive={timeRange == LeadsChartTop.Thirtydays}
              onClick={() => setTimeRange(LeadsChartTop.Thirtydays)}>30 days</Button>
            <Button
              isActive={timeRange == LeadsChartTop.Sixtydays}
              onClick={() => setTimeRange(LeadsChartTop.Sixtydays)}>60 days</Button>
          </div>
          <div>
            {
              foundUsers ?
                foundUsers?.map((user, index) => {

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
                    />
                  )
                })
                : activeUsersRange?.map((user, index) => {

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