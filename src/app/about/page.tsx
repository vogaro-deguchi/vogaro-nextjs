import type { NextPage, Metadata } from 'next'

import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

export const metadata: Metadata = {
  title: 'About',
}

const About: NextPage = () => {
  return (
    <>
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

export default About
