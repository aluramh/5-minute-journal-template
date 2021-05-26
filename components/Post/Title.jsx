import clsx from 'clsx'

export default function PostTitle ({ children }) {
  return (
    <h1
      className={clsx(
        'text-6xl font-bold tracking-tighter leading-tight mb-12 text-center px-7',
        'md:leading-none md:text-7xl',
        'lg:text-8xl'
      )}
    >
      {children}
    </h1>
  )
}
