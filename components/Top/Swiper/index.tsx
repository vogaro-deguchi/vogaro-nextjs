import React, { useRef } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation]) 

import styles from './index.module.scss'

// カルーセルにする画像のソースをリストにします
const images = [
  '/assets/Top/Swiper/mv_img01_md.jpg',
  '/assets/Top/Swiper/mv_img03_md.jpg'
]

const TestCarousel = () => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <Swiper
      slidesPerView={1.1}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
      centeredSlides={true}
      onInit={(swiper) => {
        swiper.navigation.init();
        swiper.navigation.update();
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
  )
}

export default TestCarousel