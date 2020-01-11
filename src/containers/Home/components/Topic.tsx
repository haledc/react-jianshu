import React from 'react'
import { observer } from 'mobx-react'
import { TopicWrapper, TopicItem } from '../StyleComponents'
import { useStore } from '../../../hooks'

const Topic = observer(() => {
  const { homeStore } = useStore()
  const { topicList } = homeStore

  return (
    <TopicWrapper>
      {topicList.map((item: any) => {
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
