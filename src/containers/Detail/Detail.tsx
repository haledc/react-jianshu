import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './StyleComponents'
// @ts-ignore
import { requestDetail } from './store/actions'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  title: state.detail.title,
  content: state.detail.content
})

interface DetailProps {
  title: string
  content: string
  requestDetail: typeof requestDetail
  match: { params: { id: number } }
}

const Detail: React.FC<DetailProps> = memo(({ title, content, requestDetail, match }) => {
  useEffect(() => {
    requestDetail(match.params.id)
  })

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </DetailWrapper>
  )
})

export default withRouter(
  connect(
    mapStateToProps,
    { requestDetail }
  )(Detail)
)
