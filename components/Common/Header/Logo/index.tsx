import Image from 'next/image'
import logo from './assets/header_logo.png'

export default function Logo() {
  return (
    <>
      <h1>
        <Image
          src={logo}
          alt=""
          width="128px"
          objectFit="contain"
          priority
          placeholder='blur'
        />
      </h1>
    </>
  )
}