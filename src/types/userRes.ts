import { DefaultUserRecord } from "@/types/userRecord";

export type UserRes = {
  metadata: Date,
  record: DefaultUserRecord[]
};