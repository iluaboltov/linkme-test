import Image from "next/image"
export const UserRateItem = ({company, fullName, leadsNum, place, position, profilePic}:
                    {
                      company: string,
                      fullName: string,
                      leadsNum: number
                      place: number,
                      position: string,
                      profilePic: string,
                    }) => {
  return(
    <div className={'flex'}>
      <span>{place}</span>
      <Image
        alt={'Profile Picture'}
        height={34}
        src={profilePic}
        width={34}
      />
      <div>
        <div>
          <div>
            <span>{fullName}</span>
            <span>{company} / {position}</span>
          </div>
          <div className={'rounded-md bg-[#f2f1f4]'}>
            <span>{leadsNum}</span>
            <span>Leads</span>
          </div>
        </div>
        <div className={'h-[1px]'}>
          <div className={'w-[50px] bg-[#8f96f9]'}></div>
          <div className={'bg-[#f3f2f5]'}></div>
        </div>
      </div>
    </div>
  )
}