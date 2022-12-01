import styles from './index.module.scss'

export default function SecTitle(): JSX.Element {
  return (
    <>
      <div className={styles.secTitle}>
        <h2 className={styles.secTitle__container}>
          <span className={styles.secTitle__main}>RECOMMEND</span>
          <span className={styles.secTitle__sub}>おすすめ商品</span>
        </h2>
      </div>
    </>
  )
}
