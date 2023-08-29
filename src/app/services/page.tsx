import type { NextPage } from 'next'

import Meta from '@/src/components/Common/Meta'
import Services from '@/src/components/Services/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta 
        pageTitle = "Services"
      />
      <Services />
    </>
  )
}

export default Home
