import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const NotificationItem = () => {
  return (
    <div className={'relative'}>
      <span className={'absolute flex justify-center items-center top-0.5 right-0 w-3 aspect-square bg-blue rounded-full text-white text-[0.45rem]'}>12</span>
      <NotificationsNoneOutlinedIcon/>
    </div>
  )
}