import styles from './index.module.scss'
import Image from 'next/image'
import Container from '@/components/Common/Container'

export default function PageMV( props:any ):JSX.Element {
  return (
    <>
      <div className={styles.pageMv}>
        <Container>
          <div className={styles.pageMv__content}>
            <div className={styles.pageMv__title}>
              <span className={styles.pageMv__title__main}>{props.main}</span>
              <span className={styles.pageMv__title__sub}>{props.sub}</span>
            </div>
            <div className={styles.pageMv__img}>
              <Image
                src=""
                width={375}
                height={240}
                alt='image'
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
