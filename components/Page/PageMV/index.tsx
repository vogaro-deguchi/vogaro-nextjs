import Swiper from '@/components/Top/Swiper'
import Nav from '@/components/Common/Nav'
import Image from 'next/image'
import styles from './index.module.scss'

import bg from './assets/mv_01.png'
import logo from './assets/pagemv_logo.png'

export default function PageMV (props:any): JSX.Element {
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
          placeholder='blur'
        />
        <div className={styles.pageTitle}>
          <h2 className={styles.main}>{props.main}</h2>
          <p className={styles.sub}>{props.sub}</p>
        </div>
        <div className={styles.pageLogo}>
          <Image
            src={logo}
            alt=""
            objectFit="cover"
            layout='responsive'
            priority
            placeholder='blur'
          />
        </div>
      </div>
    </>
  )
}
