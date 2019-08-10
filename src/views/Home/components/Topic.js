import React, { memo } from 'react'
import { connect } from 'react-redux'

import { TopicWrapper, TopicItem } from '../style'

const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

const Topic = memo(({ topicList }) => {
  return (
    <TopicWrapper>
      {topicList.map(item => {
        return (
          <TopicItem key={item.get('id')}>
            <img
              className="topic-pic"
              src={item.get('imgUrl')}
              alt="topic-pic"
            />
            {item.get('title')}
          </TopicItem>
        )
      })}
    </TopicWrapper>
  )
})

export default connect(mapStateToProps)(Topic)
