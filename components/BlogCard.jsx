import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const BlogCard = props => {
  const {
    post,
    image, // 'https://tailwindcss.com/img/card-left.jpg'
    badge,
    tags
  } = props
  const [highlight, setHighlight] = useState(false)

  function getPrettyDate (date) {
    const prettifiedDate = new Date(date).toLocaleDateString('en-US')
    return prettifiedDate
  }

  const className = clsx(
    'rounded-md border border-red-200 cursor-pointer px-4 py-3 mb-6 transition-all',
    'hover:shadow-md hover: hover:border-red-500'
  )

  return (
    <div className='max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md'>
      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>{getPrettyDate(post.date)}</span>

        {/* Tags */}
        {tags && (
          <div>
            {tags.slice(0, 3).map(tag => (
              <a
                className='px-2 py-2 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 ml-2'
                // href='#'
                key={tag}
              >
                {tag}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className='mt-2'>
        <Link href={`/posts/${post.slug}`} passHref>
          <a className='text-2xl text-gray-700 font-bold hover:text-gray-600'>
            {post.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-600'>{post.description}</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <Link href={`/posts/${post.slug}`} passHref>
          <a className='text-blue-600 hover:underline'>Read more</a>
        </Link>

        {/* Post author */}
        {badge && (
          <div>
            <a className='flex items-center' href='#'>
              <img
                className='w-10 h-10 object-cover rounded-full hidden sm:block'
                src='https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80'
                alt='avatar'
              />
              {/* <h1 className='text-gray-700 font-bold'>Khatab wedaa</h1> */}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogCard
