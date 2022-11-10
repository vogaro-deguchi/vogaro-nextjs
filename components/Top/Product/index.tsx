import styles from './index.module.scss'
import Image from 'next/image'

export default function Product(): JSX.Element {
  return (
    <>
      <div className={styles.product}>
        <Image
          src='/assets/Top/Product/product-sample.jpeg'
          width={203}
          height={203}
          alt="sample"
        />
        <p className={styles.name}>ルナークスコレクション</p>
        <p className={styles.desc}>冬の限定コフレ登場！月の光をまとう、ワンランク上の美しさへ。</p>
        <p className={styles.price}>6,930円（税込）</p>
      </div>
    </>
  )
}
