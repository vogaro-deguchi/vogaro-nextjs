import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta 
        pageTitle = "Services"
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
        main = "Services"
        sub = "サービス紹介"
        image = "/assets/PageMV/service.jpg"
      />
    </>
  )
}

export default Home
