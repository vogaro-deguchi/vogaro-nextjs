import MV from '@/components/Top/MV'
import SecRecommend from '@/components/Top/SecRecommend'
import SecProduct from '@/components/Top/SecProduct'
import SecRankig from '@/components/Top/SecRanking'

export default function Top(): JSX.Element {
  return (
    <>
      <MV />
      <SecRecommend />
      <SecProduct />
      <SecRankig />
    </>
  )
}
