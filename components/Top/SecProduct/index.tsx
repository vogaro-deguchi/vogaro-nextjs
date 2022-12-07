import Image from 'next/image'

import styles from './index.module.scss'

import Container from '@/components/Common/Container'
// import Product from '@/components/Top/Product'
import SecTitle from '@/components/Top/SecTitle'

const categories = [

]

export default function SecProduct(): JSX.Element {
  return (
    <>
      <div className={styles.productSec}>
        <Container>
          <SecTitle
            main = "PRODUCT"
            sub = "商品を探す"
          />
          <div className={styles.productWrapper}>
            <div className={styles.menu}>
              <h3 className={styles.menu__title}>カテゴリから探す</h3>
              <ul className={styles.menu__lists}>
                <li className={styles.menu__list}>
                  <a href="" className={styles.menu__link}>
                    <Image 
                      src="/assets/Top/SecProduct/example.jpg" width={48} height={48} alt="image"
                    />
                    <span>スキンケア</span>
                  </a>
                </li>
                <li className={styles.menu__list}>
                  <a href="" className={styles.menu__link}>
                    <Image 
                      src="/assets/Top/SecProduct/example.jpg" width={48} height={48} alt="image"
                    />
                    <span>スキンケア</span>
                  </a>
                </li>
                <li className={styles.menu__list}>
                  <a href="" className={styles.menu__link}>
                    <Image 
                      src="/assets/Top/SecProduct/example.jpg" width={48} height={48} alt="image"
                    />
                    <span>スキンケア</span>
                  </a>
                </li>
                <li className={styles.menu__list}>
                  <a href="" className={styles.menu__link}>
                    <Image 
                      src="/assets/Top/SecProduct/example.jpg" width={48} height={48} alt="image"
                    />
                    <span>スキンケア</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
