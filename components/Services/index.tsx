import BreadCrumb from '../Common/BreadCrumb'
import PageMV from '@/components/Page/PageMV'

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
        main = "Services"
        sub = "サービス紹介"
        image = "/assets/PageMV/service.jpg"
      />
    </>
  )
}
