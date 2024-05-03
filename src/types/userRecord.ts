export type DefaultUserRecord = {
  company: string,
  jobTitle: string,
  leads: {
    "7 days": number,
    "14 days": number,
    "30 days": number,
    "60 days": number,
  },
  name: string,
  profilePic: string,
}

export type UserRecord = {leads: number} & Omit<DefaultUserRecord, "leads">;

export type SortedUserRecord = {
  "Fourteendays" : UserRecord[],
  "Sevendays" : UserRecord[],
  "Sixtydays" : UserRecord[],
  "Thirtydays" : UserRecord[],
}