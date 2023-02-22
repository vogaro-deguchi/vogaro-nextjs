import styles from './index.module.scss'

export default function Box (): JSX.Element {
  return (
    <>
      <div className={styles.box}>
        <a href="#">
            <div className={styles.box__back}>
            {/* <Image 
              src="./img/projects/projects-contents-3.png"
              alt=""
            /> */}
          </div>
          <div className={styles.box__top}>
            <p>医療法人社団奉志会</p>
            <p className={styles.main}>メンズ美容クリニック「ReVIOS」プロデュース</p>
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
