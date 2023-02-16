import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import Services from '@/components/Services/index'

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
