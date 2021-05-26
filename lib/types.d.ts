export type Post = {
  templateKey: string
  title: string
  'before-day': StartOfDay
  'after-day': EndOfDay
  start: string // date
}

type StartOfDay = {
  'i-am-grateful-for': {
    'grateful-thing-1': string
    'grateful-thing-2': string
    'grateful-thing-3': string
  }
  'today-great': {
    'today-great-1': string
    'today-great-2': string
    'today-great-3': string
  }
  'daily-affirmation': string
}

type EndOfDay = {
  'amazing-things': {
    'grateful-thing-1': string
    'grateful-thing-2': string
    'grateful-thing-3': string
  }
  'today-better': string
}
