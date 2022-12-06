import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Product from '@/components/Top/Product'
import SecTitle from '@/components/Top/SecTitle'

export default function SecProduct(): JSX.Element {
  return (
    <>
      <div className={styles.recommendSec}>
        <Container>
          <SecTitle
            main = "PRODUCT"
            sub = "商品を探す"
          />
          <div className={styles.productWrapper}>
            
          </div>
        </Container>
      </div>
    </>
  )
}
