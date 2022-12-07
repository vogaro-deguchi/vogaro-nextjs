import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import Skincare from '@/components/Skincare/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Skincare />
    </>
  )
}

export default Home
