import type { NextPage, Metadata } from 'next'

import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Services',
}

const Services: NextPage = () => {
  return (
    <>
      <PageMotion>
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
      </PageMotion>
    </>
  )
}

export default Services
