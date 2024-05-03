export const SkeletonSearch = () => {
  return (
    <div className={'flex gap-2 animate-pulse'}>
      <span className={'h-8 flex-1 rounded-full bg-sky-100'}></span>
      <span className={'w-8 h-8 rounded-full bg-sky-100'}></span>
    </div>
  )
}
