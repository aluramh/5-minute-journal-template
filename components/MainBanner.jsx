import clsx from 'clsx'
import React from 'react'

const MainBanner = () => {
  return (
    <div
      class={clsx(
        'min-w-screen flex items-center justify-center',
        'md:min-h-0 mb-24'
      )}
    >
      <div class='w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 font-light'>
        <div className='w-full max-w-6xl mx-auto pb-5'>
          <div className='-mx-3 md:flex items-center'>
            {/* Left-hand side */}
            <div className='px-3 md:w-2/3 mb-10 md:mb-0'>
              <h1 className='text-6xl md:text-8xl font-bold mb-5 leading-tight'>
                Stay <br className='hidden md:block'></br>updated.
              </h1>
              <h3 className='text-gray-600 mb-7 leading-tight'>
                Subscribe now and receive the latest updates.
              </h3>
              <div>
                <span className='inline-block w-40 h-1 rounded-full bg-indigo-500'></span>
                <span className='inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1'></span>
                <span className='inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1'></span>
              </div>
            </div>

            {/* Right-hand side */}
            <div className='px-3 md:w-1/3'>
              <div className='flex mb-3'>
                <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                  <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                </div>
              </div>
              <div>
                <a
                  className={clsx(
                    'text-center cursor-pointer block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg font-bold focus:outline-none',
                    'lg:text-3xl lg:py-4 lg:px-5',
                    'md:text-2xl md:py-3 md:px-5',
                    'text-xl py-2 px-3'
                  )}
                  href='/admin'
                >
                  Create new +
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
