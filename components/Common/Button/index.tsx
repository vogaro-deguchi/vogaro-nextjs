import styles from './index.module.scss'

export default function Button (props:any):JSX.Element {
  return (
    <div className={styles.viewWrap} style={{textAlign: props.text_align}}>
      <a className={styles.view} href="">{props.text}<span></span></a>
    </div>
  )
}
