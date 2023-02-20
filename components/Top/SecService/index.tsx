import Image from 'next/image'

import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Button from '@/components/Common/Button'
import services from './assets/services.png'
import card1 from './assets/card-1.png'
import card2 from './assets/card-2.png'
import card3 from './assets/card-3.png'

export default function SecService (): JSX.Element {
  return (
    <>
      <div className={styles.whowewreSec}>
      <section className={styles.services}>
      <Image
        src={services}
        alt=""
        objectFit="cover"
        priority
        placeholder='blur'
      />
      <Container>
        <div className={styles.services__container}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.desc}>解決課題や目指すゴールに合わせたベストチームでプロジェクトを推進</p>
        </div>
        <div className={styles.services__contents}>
          <ul className={styles.cardList}>
            <li className={styles.card}>
              <h3>Webサイト制作</h3>
              <p>この文章はダミーです。文字の大きさ、量、字間、行間を確認するために入れています。</p>
              <Button 
                  text = 'View More'
                />
              <div className={styles.card__back}>
              <Image
                src={card1}
                alt=""
                objectFit="cover"
                priority
                placeholder='blur'
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
                  src={card2}
                  alt=""
                  objectFit="cover"
                  priority
                  placeholder='blur'
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
                src={card3}
                alt=""
                objectFit="cover"
                priority
                placeholder='blur'
              />
              </div>
            </li>
          </ul>
        </div>
        </Container>
      </section>
      </div>
    </>
  )
}
