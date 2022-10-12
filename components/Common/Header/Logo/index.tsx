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
          priority
          placeholder='blur'
        />
      </h1>
    </>
  )
}