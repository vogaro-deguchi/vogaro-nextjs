import BreadCrumb from "../Common/BreadCrumb"
import PageMV from "@/components/Common/PageMV"

export default function Skincare(): JSX.Element {
  return (
    <>
      <BreadCrumb
        lists={[
          {
            name: "ホーム",
            path: "/",
          },
          {
            name: "スキンケア",
          },
        ]}
      />
      <PageMV 
        main = "SKINCARE"
        sub = "スキンケア"
      />
    </>
  )
}
