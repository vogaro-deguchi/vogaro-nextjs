import type { NextPage } from 'next'

import Meta from '@/src/components/Common/Meta'
import Projects from '@/src/components/Projects/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta 
        pageTitle = "Projects"
      />
      <Projects />
    </>
  )
}

export default Home
