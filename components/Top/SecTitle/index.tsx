import styles from './index.module.scss'

export default function SecTitle (props:any): JSX.Element {
  return (
    <>
      <div className={styles.secTitle}>
        <h2 className={styles.secTitle__container}>
          <span className={styles.secTitle__main}>{props.main}</span>
          <span className={styles.secTitle__sub}>{props.sub}</span>
        </h2>
      </div>
    </>
  )
}
