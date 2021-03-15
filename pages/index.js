import Head from 'next/head'
import { attributes, react as HomeContent } from '../content/home.md'

function Component (props) {
  let { title, cats } = attributes

  return (
    <div className='px-3 py-2'>
      <Head>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>
      <article className='prose'>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default Component
