import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

@connect(mapState)
class Recommend extends PureComponent {

  render() {

    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map(item => (
            <RecommendItem
              key={ item.get('id') }
              imgUrl={ item.get('imgUrl') }
            />
          ))
        }
      </RecommendWrapper>
    )
  }
}

export default Recommend