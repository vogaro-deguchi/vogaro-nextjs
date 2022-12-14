import Swiper from '@/components/Top/Swiper'

import styles from './index.module.scss'

export default function MV (): JSX.Element {
  return (
    <>
      <div className={styles.mvSec}>
        <Swiper />
      </div>
    </>
  )
}
