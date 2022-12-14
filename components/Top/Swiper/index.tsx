import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' // カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' // 使いたい機能をインポート

import styles from './index.module.scss'

SwiperCore.use([Pagination, Navigation])

// カルーセルにする画像のソースをリストにします
const images = [
  '/assets/Top/Swiper/mv_img01_md.jpg',
  '/assets/Top/Swiper/mv_img03_md.jpg'
]

export default function SwiperComponent ():JSX.Element {
  // const prevRef = useRef<HTMLDivElement>(null)
  // const nextRef = useRef<HTMLDivElement>(null)
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        slidesPerView={1.1}
        pagination={{
          el: '#pagination',
          clickable: true
        }}
        navigation={{
          prevEl: '#button_prev',
          nextEl: '#button_next'
        }}
        loop={true}
        centeredSlides={true}
        onInit={(swiper) => {
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={720}
              height={360}
              objectFit="contain"
              alt="image"
            />
          </SwiperSlide>
        )
      })}
      </Swiper>
      <div id="button_prev" className={styles.swiperBtnPrev}></div>
      <div id="button_next" className={styles.swiperBtnNext}></div>

      <div id="pagination" className={styles.pagination}></div>
    </div>
  )
}

<style>

</style>
