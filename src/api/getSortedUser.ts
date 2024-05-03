import { DefaultUserRecord, UserRecord } from "@/types/userRecord";
import { UserRes } from "@/types/userRes";
import axios from "axios";

const getSortedUser = async () => {
  const quickSort = (arr: UserRecord[]): UserRecord[] => {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const lessThanPivot = [];
      const greaterThanPivot = [];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].leads >= pivot.leads) {
          lessThanPivot.push(arr[i]);
        } else {
          greaterThanPivot.push(arr[i]);
        }
      }
      return quickSort(lessThanPivot).concat(pivot, quickSort(greaterThanPivot));
    }
  }

  const res: DefaultUserRecord[] = await axios.get<UserRes>('https://api.jsonbin.io/v3/b/662bb466acd3cb34a83e9707').then((res) => res.data.record)

  const fourteenTimeArray: UserRecord[] = []
  const sevenTimeArray: UserRecord[] = []
  const sixtyTimeArray: UserRecord[] = []
  const thirtyTimeArray: UserRecord[] = []

  res.map((user)=>{
    const {company, jobTitle, leads, name, profilePic} = user;

    fourteenTimeArray.push({
      company: company,
      jobTitle: jobTitle,
      leads: leads["14 days"],
      name: name, 
      profilePic: profilePic
    })
    sevenTimeArray.push({
      company: company,
      jobTitle: jobTitle,
      leads: leads["7 days"],
      name: name,
      profilePic: profilePic
    })
    sixtyTimeArray.push({
      company: company,
      jobTitle: jobTitle,
      leads: leads["60 days"],
      name: name,
      profilePic: profilePic
    })
    thirtyTimeArray.push({
      company: company,
      jobTitle: jobTitle,
      leads: leads["30 days"],
      name: name,
      profilePic: profilePic
    })
  })

  const sortedFourteenTimeArray: UserRecord[] = quickSort(fourteenTimeArray)
  const sortedSevenTimeArray: UserRecord[] = quickSort(sevenTimeArray)
  const sortedSixtyTimeArray: UserRecord[] = quickSort(sixtyTimeArray)
  const sortedThirtyTimeArray: UserRecord[] = quickSort(thirtyTimeArray)
  
  return {
    Fourteendays : sortedFourteenTimeArray,
    Sevendays : sortedSevenTimeArray,
    Sixtydays : sortedThirtyTimeArray,
    Thirtydays : sortedSixtyTimeArray
  }
}

export default getSortedUser;