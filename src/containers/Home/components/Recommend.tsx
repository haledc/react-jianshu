import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../StyleComponents'
import { RootState } from '../../../store'

const Recommend: React.FC = memo(() => {
  const recommendList = useSelector(
    (state: RootState) => state.home.recommendList
  )
  return (
    <RecommendWrapper>
      {recommendList.map(item => (
        <RecommendItem key={item.id} imgUrl={item.imgUrl} />
      ))}
    </RecommendWrapper>
  )
})

export default Recommend
