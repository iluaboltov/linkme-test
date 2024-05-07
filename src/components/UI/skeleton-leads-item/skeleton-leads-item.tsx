export const SkeletonLeadsItem = () => {
  return (
    <span className={"flex gap-2 w-full items-center animate-pulse p-2"}>
      <span className={"w-6 md:w-8 lg:w-12 2xl:w-16 aspect-square rounded-full bg-light-blue"}></span>
      <div className={"flex flex-col w-full gap-1 justify-center"}>
        <div className={"flex justify-between"}>
          <div className={"flex flex-col gap-1.5"}>
            <span className={"w-16 md:w-20 h-1.5 md:h-2.5 2xl:h-3 bg-light-blue rounded-full "}></span>
            <span className={"w-20 md:w-36 h-1.5 md:h-2.5 2xl:h-3 bg-light-blue rounded-full "}></span>
          </div>
          <span className={"min-w-[3rem] md:min-w-[3.5rem] 2xl:min-w-[4.5rem] h-8 bg-light-blue rounded-full"}></span>
        </div>
        <span className={"h-1.5 md:h-2.5 2xl:h-3 bg-light-blue rounded-full "}></span>
      </div>
    </span>
  )
}
