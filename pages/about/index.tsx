import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import About from '@/components/About/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <About />
    </>
  )
}

export default Home
