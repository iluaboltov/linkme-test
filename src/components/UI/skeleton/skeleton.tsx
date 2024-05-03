import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Skeleton = ({children, count = 1}:
                           {
                             children: React.ReactNode
                             count: number,
                           }) => {
  const elementsArray = Array(count).fill(0)
  if (count <= 0) return (<>{children}</>)
  return (
    <>
      {
        elementsArray.map((_)=> {
          return(<React.Fragment key={uuidv4()}>{children}</React.Fragment>)
        })
      }
    </>
  )
}