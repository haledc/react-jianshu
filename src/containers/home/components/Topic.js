import React, { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

Topic.propTypes = {
  topicList: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Topic)
