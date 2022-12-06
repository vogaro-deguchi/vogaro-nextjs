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
          />
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