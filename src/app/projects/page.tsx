import type { NextPage, Metadata } from 'next'

import BreadCrumb from '@/components/Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects: NextPage = () => {
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
          main = "Projects"
          sub = "実績紹介"
          image = "/assets/PageMV/project.jpg"
        />
      </PageMotion>
    </>
  )
}

export default Projects
