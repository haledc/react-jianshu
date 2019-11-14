import React, { memo } from 'react'
import { connect } from 'react-redux'

import { TopicWrapper, TopicItem } from '../StyleComponents'
import { RootState } from '../../../store'
import { Topic as TopicContent} from '../store/types'

const mapStateToProps = (state: RootState) => ({
  topicList: state.home.topicList
})

interface TopicProps {
  topicList: Array<TopicContent>
}

const Topic: React.FC<TopicProps> = memo(({ topicList }) => {
  return (
    <TopicWrapper>
      {topicList.map(item => {
        return (
          <TopicItem key={item.id}>
            <img
              className="topic-pic"
              src={item.imgUrl}
              alt="topic-pic"
            />
            {item.title}
          </TopicItem>
        )
      })}
    </TopicWrapper>
  )
})

export default connect(mapStateToProps)(Topic)
