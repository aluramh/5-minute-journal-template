import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const BlogCard = props => {
  const { post } = props
  const [highlight, setHighlight] = useState(false)

  const className = clsx(
    'rounded-md border border-red-200 cursor-pointer px-4 py-3 mb-6 transition-all',
    'hover:shadow-md hover: hover:border-red-500'
  )

  return (
    <div
      className={className}
      onMouseOver={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      <div className='text-xl'>{post.title}</div>
      <div className='text-xs text-red-700 opacity-50 mb-1'>{post.date}</div>
      <div>{post.description}</div>

      <Link href={`/posts/${post.slug}`} passHref>
        <a className='underline text-red-800'>Read post</a>
      </Link>
    </div>
  )
}

export default BlogCard
