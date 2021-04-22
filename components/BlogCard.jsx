import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const BlogCard = props => {
  const {
    post,
    image, // 'https://tailwindcss.com/img/card-left.jpg'
    badge
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
    <>
      <div class='max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md'>
        <div class='flex justify-between items-center'>
          <span class='font-light text-gray-600'>
            {getPrettyDate(post.date)}
          </span>
          <a
            class='px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500'
            href='#'
          >
            Design
          </a>
        </div>
        <div class='mt-2'>
          <Link href={`/posts/${post.slug}`} passHref>
            <a class='text-2xl text-gray-700 font-bold hover:text-gray-600'>
              {post.title}
            </a>
          </Link>
          <p class='mt-2 text-gray-600'>{post.description}</p>
        </div>
        <div class='flex justify-between items-center mt-4'>
          <Link href={`/posts/${post.slug}`} passHref>
            <a class='text-blue-600 hover:underline'>Read more</a>
          </Link>

          {/* Post author */}
          {badge && (
            <div>
              <a class='flex items-center' href='#'>
                <img
                  class='w-10 h-10 object-cover rounded-full hidden sm:block'
                  src='https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80'
                  alt='avatar'
                />
                {/* <h1 class='text-gray-700 font-bold'>Khatab wedaa</h1> */}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogCard
