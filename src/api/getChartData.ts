import { ChartRes } from "@/types/chartRes";
import axios from "axios";

export const getChartData = async () => {
  return await axios.get<ChartRes>('https://api.jsonbin.io/v3/b/662bb729acd3cb34a83e980d').then((res) => res.data)
}