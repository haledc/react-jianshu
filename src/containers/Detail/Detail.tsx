import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './StyleComponents'
import { REQUEST_DETAIL } from './store'
import { RootState } from '../../store'

const Detail: React.FC = () => {
  const { id } = useParams()
  const title = useSelector((state: RootState) => state.detail.title)
  const content = useSelector<RootState, string>(state => state.detail.content)
  const dispatch = useDispatch()

  useEffect(() => {
    // requestDetail(id!)
    dispatch({ type: REQUEST_DETAIL, payload: { id } })
  }, [dispatch, id])

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </DetailWrapper>
  )
}

export default Detail
