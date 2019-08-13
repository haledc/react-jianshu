import React, { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { RecommendWrapper, RecommendItem } from '../style'

const mapStateToProps = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

const Recommend = memo(({ recommendList }) => {
  return (
    <RecommendWrapper>
      {recommendList.map(item => (
        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
      ))}
    </RecommendWrapper>
  )
})

Recommend.propTypes = {
  recommendList: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Recommend)
