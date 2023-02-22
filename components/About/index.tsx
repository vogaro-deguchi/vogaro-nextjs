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
        main = "Who We Are"
        sub = "わたしたちについて"
        image = "/assets/PageMV/about.jpg"
      />
    </>
  )
}
