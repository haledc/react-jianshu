import React, { useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './StyleComponents'
import { getDetail } from '../../request'

const Detail = () => {
  const { id } = useParams()
  const localStore = useLocalStore(() => ({
    title: '',
    content: '',
    setDetail(title: string, content: string) {
      localStore.title = title
      localStore.content = content
    }
  }))

  useEffect(() => {
    const fetchData = async () => {
      const { title, content } = await getDetail(id!)
      localStore.setDetail(title, content)
    }
    fetchData()
  }, [id, localStore])

  return useObserver(() => (
    <DetailWrapper>
      <Header>{localStore.title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: localStore.content }} />
    </DetailWrapper>
  ))
}

export default Detail
