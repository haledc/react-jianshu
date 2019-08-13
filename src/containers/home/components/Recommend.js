import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'

const mapStateToProps = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

@connect(mapStateToProps)
class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {recommendList.map(item => (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
        ))}
      </RecommendWrapper>
    )
  }
}

export default Recommend
