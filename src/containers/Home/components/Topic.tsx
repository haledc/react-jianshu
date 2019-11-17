import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { TopicWrapper, TopicItem } from '../StyleComponents'
import { RootState } from '../../../store'

const Topic: React.FC = memo(() => {
  const topicList = useSelector((state: RootState) => state.home.topicList)

  return (
    <TopicWrapper>
      {topicList.map(item => {
        return (
          <TopicItem key={item.id}>
            <img className="topic-pic" src={item.imgUrl} alt="topic-pic" />
            {item.title}
          </TopicItem>
        )
      })}
    </TopicWrapper>
  )
})

export default Topic
