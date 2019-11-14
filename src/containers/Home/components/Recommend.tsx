import React, { memo } from 'react'
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../StyleComponents'
import { RootState } from '../../../store'
import { Recommend as RecommendContent } from '../store/types'

const mapStateToProps = (state: RootState) => ({
  recommendList: state.home.recommendList
})

interface RecommendProps {
  recommendList: Array<RecommendContent>
}

const Recommend: React.FC<RecommendProps> = memo(({ recommendList }) => {
  return (
    <RecommendWrapper>
      {recommendList.map(item => (
        <RecommendItem key={item.id} imgUrl={item.imgUrl} />
      ))}
    </RecommendWrapper>
  )
})

export default connect(mapStateToProps)(Recommend)
