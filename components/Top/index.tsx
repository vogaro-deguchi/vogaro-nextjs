import Image from 'next/image'

import Nav from '@/components/Common/Nav'
import Container from '@/components/Common/Container'
import Button from '@/components/Common/Button'
import Project from '@/components/Top/Project'
import Box from '@/components/Top/Box'

import styles from './index.module.scss'

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
      <section className={styles.secWhoweare}>
        <h2 className={styles.title}>Who We Are</h2>
        <div className={styles.typo}>
          <Image
            src='/assets/Top/whoweare_typo.png'
            alt="Who We Are"
            width={1527}
            height={217}
            objectFit="contain"
            priority
          />
        </div>
        <Container>
          <div className={styles.secWhoweare__container}>
            <div className={styles.secWhoweare__container__left}>
              {/* <img className={styles.scrubLeft} src="./img/whoweare/whoweare-image.png" alt=""> */}
              <Image
                src='/assets/Top/whoweare_kv.png'
                alt=""
                width={495}
                height={596}
                objectFit="cover"
                priority
              />
            </div>
            <div className={styles.secWhoweare__container__right}>
              <p className={styles.text1}>ビジネスの成長に加速するマーケティング/クリエイティブチーム</p>
              <p className={styles.text}>Vogaroは、企業のブランディング・マーケティング支援を展開する会社です。"ビジネスを加速する"ことをミッションとして、戦略立案から実行まで一気通貫で挑戦を支援しています。</p>
              <Button 
                text = 'View More'
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.secServices}>
      <Image
        src="/assets/Top/services_typo.png"
        alt=""
        width={1096}
        height={211}
        objectFit="cover"
        priority
      />
      <Container>
        <div className={styles.secServices__container}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.desc}>解決課題や目指すゴールに合わせたベストチームでプロジェクトを推進</p>
        </div>
        <div className={styles.secServices__contents}>
          <ul className={styles.cardList}>
            <li className={styles.card}>
              <h3>Webサイト制作</h3>
              <p>この文章はダミーです。文字の大きさ、量、字間、行間を確認するために入れています。</p>
              <Button 
                text = 'View More'
              />
              <div className={styles.card__back}>
                <Image
                  src="/assets/Top/services_card01.png"
                  alt=""
                  objectFit="contain"
                  layout='fill'
                  priority
                />
              </div>
            </li>
            <li className={styles.card}>
              <h3>Web広告施策</h3>
              <p>この文章はダミーです。文字の大きさ、量、字間、行間を確認するために入れています。</p>
              <Button 
                text = 'View More'
              />
              <div className={styles.card__back}>
                <Image
                  src="/assets/Top/services_card02.png"
                  alt=""
                  objectFit="contain"
                  layout='fill'
                  priority
                />
              </div>
            </li>
            <li className={styles.card}>
              <h3>ソーシャルメディア施策</h3>
              <p>この文章はダミーです。文字の大きさ、量、字間、行間を確認するために入れています。</p>
              <Button 
                text = 'View More'
              />
              <div className={styles.card__back}>
                <Image
                  src="/assets/Top/services_card03.png"
                  alt=""
                  objectFit="contain"
                  layout='fill'
                  priority
                />
              </div>
            </li>
          </ul>
        </div>
        </Container>
      </section>
      <section className={styles.secProject}>
        <Project
          title = "Service"
          desc = "Webサイト制作実績"
        >
          <Box 
            main = "テスト"
            image = 'website/detail01.jpg'
          />
          <Box 
            main = "テスト"
            image = 'website/detail01.jpg'
          />
        </Project>
        <Project
          title = "Advertising"
          desc = "Web広告施策実績"
        >
        </Project>
        <Project
          title = "Advertising"
          desc = "Web広告施策実績"
        >
        </Project>
      </section>
    </>
  )
}
