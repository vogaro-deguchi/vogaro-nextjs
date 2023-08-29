import type { NextPage } from 'next'

import Meta from '@/src/components/Common/Meta'
import About from '@/src/components/About/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta 
        pageTitle = "Who We Are"
      />
      <About />
    </>
  )
}

export default Home
