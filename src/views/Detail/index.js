import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './style'
import { actions } from './store'

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actions.getDetail(id))
  }
})

const Detail = props => {
  const { title, content } = props

  useEffect(() => {
    props.getDetail(props.match.params.id)
  })

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </DetailWrapper>
  )
}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Detail)
)
