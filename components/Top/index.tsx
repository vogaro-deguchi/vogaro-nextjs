import MV from '@/components/Top/MV'
import SecWhoweare from '@/components/Top/SecWhoweare'
import SecService from '@/components/Top/SecService'
import SecProject from '@/components/Top/SecProject'

export default function Top (): JSX.Element {
  return (
    <>
      <MV />
      <SecWhoweare />
      <SecService />
      <SecProject />
    </>
  )
}
