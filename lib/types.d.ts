export type Post = {
  templateKey: string
  title: string
  dayStart: StartOfDay
  dayEnd: EndOfDay
  date: string // date
  image?: string
  tags?: string[]
}

type StartOfDay = {
  iAmGratefulFor: {
    gratefulThing1: string
    gratefulThing2: string
    gratefulThing3: string
  }
  whatWouldMakeTodayGreat: {
    todayGreat1: string
    todayGreat2: string
    todayGreat3: string
  }
  dailyAffirmation: string
}

type EndOfDay = {
  amazingThingsThatHappened: {
    amazingThing1: string
    amazingThing2: string
    amazingThing3: string
  }
  couldHaveMadeTodayBetter: string
}

export interface ExtendedPost extends Post {
  slug: string
  content: string
}
