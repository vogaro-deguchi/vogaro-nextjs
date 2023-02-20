import Image from 'next/image'

import styles from './index.module.scss'

import Container from '@/components/Common/Container'
import Button from '@/components/Common/Button'

import whoweare from './assets/whoweare.png'
import whoweareImage from './assets/whoweare-image.png'

export default function SecWhoweare (): JSX.Element {
  return (
    <>
      <div className={styles.whowewreSec}>
        <section className={styles.whoweare}>
          <h2 className={styles.title}>Who We Are</h2>
          <div className={styles.typo}>
            <Image
              src={whoweare}
              alt="Who We Are"
              width={1527}
              height={217}
              objectFit="contain"
              priority
              placeholder='blur'
            />
          </div>
          <Container>
            <div className={styles.whoweare__container}>
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
                <p className={styles.text1}>ビジネスの成長に加速するマーケティング/クリエイティブチーム</p>
                <p className={styles.text}>Vogaroは、企業のブランディング・マーケティング支援を展開する会社です。"ビジネスを加速する"ことをミッションとして、戦略立案から実行まで一気通貫で挑戦を支援しています。</p>
                <Button 
                  text = 'View More'
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}
