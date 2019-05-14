/*
 * @Author: Hale
 * @Description:
 * @Date: 2018-12-27
 */
import React, { memo } from 'react'
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

const Recommend = memo(props => {
  const { recommendList } = props
  return (
    <RecommendWrapper>
      {recommendList.map(item => (
        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
      ))}
    </RecommendWrapper>
  )
})

export default connect(mapState)(Recommend)
