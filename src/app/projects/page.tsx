import type { NextPage, Metadata } from 'next'

import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects: NextPage = () => {
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
        main = "Projects"
        sub = "実績紹介"
        image = "/assets/PageMV/project.jpg"
      />
    </>
  )
}

export default Projects
