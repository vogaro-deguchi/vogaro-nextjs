import Image from 'next/image'

import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import whoweare from './assets/whoweare.png'
import whoweareImage from './assets/whoweare-image.png'

export default function SecWhoweare (): JSX.Element {
  return (
    <>
      <div className={styles.whowewreSec}>
        <section className={styles.whoweare}>
          <h2 className={styles.title}>Who We Are</h2>
          <Image
            src={whoweare}
            alt=""
            objectFit="cover"
            priority
            placeholder='blur'
            className={styles.typo}
          />
          <div className={styles.whoweare__container}>
            <Container>
              <div className={styles.whoweare__container__left}>
                {/* <img className={styles.scrubLeft} src="./img/whoweare/whoweare-image.png" alt=""> */}
                <Image
                  src={whoweareImage}
                  alt=""
                  objectFit="cover"
                  priority
                  placeholder='blur'
                />
              </div>
              <div className={styles.whoweare__container__right}>
                <p className={styles.desc}>ビジネスの成長に加速するマーケティング/クリエイティブチーム</p>
                <p>Vogaroは、企業のブランディング・マーケティング支援を展開する会社です。"ビジネスを加速する"ことをミッションとして、戦略立案から実行まで一気通貫で挑戦を支援しています。</p>
                <a className={styles.view} href="">View More<span></span></a>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </>
  )
}
