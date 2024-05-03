export const SkeletonLeadsItem = () => {
  return (
    <span className={"flex gap-2 animate-pulse p-2"}>
      <span className={"w-8 h-8 rounded-full bg-light-blue"}></span>
      <div className={"flex flex-col gap-1 justify-center"}>
        <div className={"flex justify-between"}>
          <div className={"flex flex-col gap-1.5"}>
            <span className={"w-16 h-1.5 bg-light-blue rounded-full "}></span>
            <span className={"w-20 h-1.5 bg-light-blue rounded-full "}></span>
          </div>
          <span className={"w-8 h-5 bg-light-blue rounded-full"}></span>
        </div>
        <span className={"w-40 h-1.5 bg-light-blue rounded-full "}></span>
      </div>
    </span>
  )
}
