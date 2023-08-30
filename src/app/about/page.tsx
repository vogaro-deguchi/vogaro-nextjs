import type { NextPage, Metadata } from 'next'

import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'About',
}

const About: NextPage = () => {
  return (
    <>
      <PageMotion>
        <PageMV
          main = "Who We Are"
          sub = "わたしたちについて"
          image = "/assets/PageMV/about.jpg"
        />
      </PageMotion>
    </>
  )
}

export default About
