import { UserRecord } from "@/types/userRecord";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { ChangeEvent, useEffect, useState } from "react";
export const Search = ({onChange, users}:
                        {
                          onChange: (value: UserRecord[]) => void,
                          users: UserRecord[] | null,
                        }) => {
  const [keyString, setKeyword] = useState("")
  useEffect(()=>{
    if(!keyString || !users) return;
    onChange(filterArray(keyString, users))
  }, [users])
  const filterArray = (keyword: string, users: UserRecord[] | null) => {
    return users!.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase())));
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;

    if (!users || !keyword) return;

    setKeyword(keyword)
    onChange(filterArray(keyword, users))
  }
  return(
    <div className={'flex gap-4 justify-between items-center'}>
      <input className={'caret-black w-full h-10 outline-none rounded-3xl p-4 bg-white text-primary'} onChange={(e) => onChangeHandler(e)} placeholder={'Search'} type="text" />
      <ImportExportIcon className={'text-blue bg-light-blue rounded-full w-10 h-10 p-1'}/>
    </div>
  )
}