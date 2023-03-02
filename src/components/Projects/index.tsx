import BreadCrumb from '../Common/BreadCrumb'
import PageMV from '@/src/components/Page/PageMV'

export default function  (): JSX.Element {
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
