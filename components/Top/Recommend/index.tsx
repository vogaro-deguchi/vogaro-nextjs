import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Product from '@/components/Top/Product'

export default function Recommend(): JSX.Element {
  return (
    <>
      <div className={styles.recommendSec}>
        <Container>
          <div className={styles.recommendSec__head}>
            <h2 className={styles.recommendSec__head__heading}>
              <span className={styles.main}>RECOMMEND</span>
              <span className={styles.sub}>おすすめ商品</span>
            </h2>
          </div>
          <div className={styles.productWrapper}>
            <Product />
            <Product />
            <Product />
          </div>
        </Container>
      </div>
    </>
  )
}
