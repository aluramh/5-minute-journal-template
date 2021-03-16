import clsx from 'clsx'
import React from 'react'

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(['container mx-auto px-5 py-4', className])}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
