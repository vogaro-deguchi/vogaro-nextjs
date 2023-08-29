import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta 
        pageTitle = "Projects"
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
        main = "Projects"
        sub = "実績紹介"
        image = "/assets/PageMV/project.jpg"
      />
    </>
  )
}

export default Home
