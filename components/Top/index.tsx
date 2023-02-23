import Nav from '@/components/Common/Nav'
import Image from 'next/image'

import styles from './index.module.scss'

import SecWhoweare from '@/components/Top/SecWhoweare'
import SecService from '@/components/Top/SecService'
import SecProject from '@/components/Top/SecProject'

export default function Top (): JSX.Element {
  return (
    <>
      <div className={styles.secMv}>
        {/* <Swiper /> */}
        <Nav></Nav>
        <Image
          src='/assets/Top/mv_bg.png'
          alt=""
          width="100%"
          height="100%"
          objectFit="cover"
          layout='fill'
          priority
        />
        <div className={styles.secMv__logo}>
          <Image
            src='/assets/Top/mv_logo.png'
            alt=""
            width="300"
            height="388"
            priority
          />
        </div>
      </div>
      <SecWhoweare />
      <SecService />
      <SecProject />
    </>
  )
}
