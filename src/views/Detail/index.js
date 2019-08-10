import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './style'
import { actions } from './store'

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = dispatch => ({
  getDetail(id) {
    dispatch(actions.getDetail(id))
  }
})

const Detail = memo(({ title, content, getDetail, match }) => {
  useEffect(() => {
    getDetail(match.params.id)
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
    mapDispatchToProps
  )(Detail)
)
