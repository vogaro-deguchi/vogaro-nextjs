import Swiper from '@/components/Top/Swiper'
import Nav from '@/components/Common/Nav'
import Image from 'next/image'
import styles from './index.module.scss'

import logo from './assets/mv_01.png'

export default function MV (): JSX.Element {
  return (
    <>
      <div className={styles.mvSec}>
        {/* <Swiper /> */}
        <Nav></Nav>
        <Image
          src={logo}
          alt=""
          width="100%"
          height="100%"
          objectFit="cover"
          layout='fill'
          priority
          placeholder='blur'
        />
      </div>
    </>
  )
}
