import { Card } from "@/components/UI/card";

export const SkeletonBody = () => {
  return (
    <Card className={'min-h-screen w-full h-full p-8'}>
      <div
        className={"min-h-screen w-full h-full animate-pulse bg-light-blue rounded-lg "}
      >
      </div>
    </Card>
  )
}