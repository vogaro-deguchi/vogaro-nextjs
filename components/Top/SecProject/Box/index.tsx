import Image from 'next/image'

import styles from './index.module.scss'

export default function Box (props:any): JSX.Element {
  return (
    <>
      <div className={styles.box}>
        <a href="#">
          <div className={styles.box__back}>
            <Image
              src={`/assets/Top/SecProject/${props.image}`}
              alt=""
              width="100%"
              height="100%"
              layout = "responsive"
            />
          </div>
          <div className={styles.box__top}>
            <p>医療法人社団奉志会</p>
            <p className={styles.main}>{props.main}</p>
          </div>
          <div className={styles.box__bottom}>
            <p>DATE : 2020.12</p>
            <p>CATEGORY : BRANDING, CORPORATE</p>
          </div>
        </a>
      </div>
    </>
  )
}
