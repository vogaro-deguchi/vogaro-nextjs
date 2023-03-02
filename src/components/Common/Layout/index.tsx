import Header from '@/src/components/Common/Header'
import Footer from '@/src/components/Common/Footer'

export default function Layout ({ children }: any) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}
