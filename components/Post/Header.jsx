// import DateFormatter from '../components/DateFormatter'
import PostTitle from './Title'

export default function PostHeader ({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className='max-w-2xl mx-auto'>
        <div className='mb-6 text-lg'>
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </>
  )
}
