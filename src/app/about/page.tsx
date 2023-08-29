import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta 
        pageTitle = "Who We Are"
      /> */}
      <BreadCrumb
        lists={[
          {
            name: 'ホーム',
            path: '/'
          },
          {
            name: 'スキンケア'
          }
        ]}
      />
      <PageMV
        main = "Who We Are"
        sub = "わたしたちについて"
        image = "/assets/PageMV/about.jpg"
      />
    </>
  )
}

export default Home
