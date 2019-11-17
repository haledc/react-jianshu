import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './StyleComponents'
import { REQUEST_DETAIL } from './store'
import { RootState } from '../../store'

// const mapStateToProps = (state: RootState) => ({
//   title: state.detail.title,
//   content: state.detail.content
// })

// interface DetailProps {
//   title: string
//   content: string
//   requestDetail: typeof requestDetail
// }

const Detail: React.FC = memo(() => {
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
})

// export default connect(mapStateToProps, { requestDetail })(Detail)
export default Detail
