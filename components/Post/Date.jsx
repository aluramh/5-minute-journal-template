import React from 'react'
import { DateTime } from 'luxon'

const Separator = () => <span className='mx-1'>/</span>

const DateFormatter = ({ date }) => {
  if (date) {
    const styleNumber = n => <span className='font-bold'>{n}</span>

    const strDate = DateTime.fromISO(date)
      .toLocaleString()
      .split('/')

    return (
      <span>
        {styleNumber(strDate[0])}
        <Separator />
        {styleNumber(strDate[1])}
        <Separator />
        {styleNumber(strDate[2])}
      </span>
    )
  }

  return null
}

const Date = props => {
  return (
    <div className='max-w-2xl mx-auto mb-6 text-lg text-gray-700'>
      <div className='w-full text-center'>
        <DateFormatter date={props.date} />
      </div>
    </div>
  )
}

export default Date
