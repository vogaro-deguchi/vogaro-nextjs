import Swiper from '@/components/Top/Swiper'
import Nav from '@/components/Common/Nav'
import Image from 'next/image'
import styles from './index.module.scss'

import bg from './assets/mv_01.png'
import vogaro from './assets/vogaro.png'

export default function MV (): JSX.Element {
  return (
    <>
      <div className={styles.mvSec}>
        {/* <Swiper /> */}
        <Nav></Nav>
        <Image
          src={bg}
          alt=""
          width="100%"
          height="100%"
          objectFit="cover"
          layout='fill'
          priority
        />
        <div className={styles.mvSec__logo}>
          <Image
            src={vogaro}
            alt=""
            width="300"
            height="388"
            priority
          />
        </div>
      </div>
    </>
  )
}
