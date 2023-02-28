import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import Projects from '@/components/Projects/index'

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
