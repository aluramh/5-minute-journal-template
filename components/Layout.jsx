import clsx from 'clsx'
import React from 'react'

const Layout = ({ children, className, ...props }) => {
  return (
    <div className={clsx([className])} {...props}>
      {children}
    </div>
  )
}

export default Layout
