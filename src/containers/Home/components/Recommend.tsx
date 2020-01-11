import React from 'react'
import { observer } from 'mobx-react'
import { RecommendWrapper, RecommendItem } from '../StyleComponents'
import { useStore } from '../../../hooks'

const Recommend = observer(() => {
  const { homeStore } = useStore()
  const { recommendList } = homeStore

  return (
    <RecommendWrapper>
      {recommendList.map((item: any) => (
        <RecommendItem key={item.id} imgUrl={item.imgUrl} />
      ))}
    </RecommendWrapper>
  )
})

export default Recommend
