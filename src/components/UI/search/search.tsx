import { UserRecord } from "@/types/userRecord";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
export const Search = ({changeSort, onChange, sort, users}:
                        {
                          changeSort: Dispatch<SetStateAction<"ASC" | "DESC">>,
                          onChange: Dispatch<SetStateAction<UserRecord[] | null>>,
                          sort: "ASC" | "DESC",
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
    sort == "ASC" ? onChange(filterArray(keyword, users)) : onChange(filterArray(keyword, users).reverse())
  }

  const sortByAscDesc = () => {
    changeSort((prevState) => prevState == "ASC" ? "DESC" : "ASC")
  }

  useEffect(() => {
    if (!users) return;

    sort == "ASC" ? onChange(filterArray(keyString, users)) : onChange(filterArray(keyString, users).reverse())
  }, [sort]);

  return(
    <div className={'flex gap-4 justify-between items-center'}>
      <input className={'caret-black w-full outline-none h-12 md:h-6 lg:h-8 xl:h-12 rounded-3xl p-4 bg-white text-primary'} onChange={(e) => onChangeHandler(e)} placeholder={'Search'} type="text" />
      <ImportExportIcon className={'text-blue bg-light-blue hover:bg-[#c6cdf1] rounded-full p-1 transition-all ease-in-out'} onClick={sortByAscDesc} sx={{ fontSize: {'@media (max-width: 767px) ': { fontSize: "3rem"}, '@media (min-width: 1280px) ': { fontSize: "2.5rem"}, xs:"2rem"}}}/>
    </div>
  )
}