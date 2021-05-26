import React from 'react'
import clsx from 'clsx'

const defaultQuote = 'I am a Man of Fortune, and I must seek my Fortune...'

const Quote = props => {
  const { quote = defaultQuote, className } = props

  return (
    <blockquote
      className={clsx([
        'relative text-xl bg-white text-gray-600 border-gray-600 shadow-md rounded-md',
        'px-10 pt-10 pb-8',
        className
      ])}
    >
      {/* <div className='stylistic-quote-mark' aria-hidden='true'>
      &ldquo;
    </div> */}

      {/* Quote content */}
      <p className='mb-4 font-serif italic'>{quote}</p>

      {/* Quote source */}
      <cite className='flex items-center'>
        <div className='w-10 h-10 bg-red-500 rounded-full border-2 border-red-400 mr-3 '>
          <img
            className='w-full h-full mr-4 rounded-full object-cover'
            src='/Avery.webp'
          />
        </div>

        <div className='flex flex-col items-start'>
          <span className='text-sm font-bold'>Nathan Drake</span>
          <span className='text-sm'>Uncharted 4</span>
        </div>
      </cite>
    </blockquote>
  )
}
export default Quote

// export default DailyQuote
