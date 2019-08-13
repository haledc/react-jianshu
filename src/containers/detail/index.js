import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { DetailWrapper, Header, Content } from './style'
import { requestDetail } from './store/actions'

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const Detail = memo(({ title, content, requestDetail, match }) => {
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

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  requestDetail: PropTypes.func.isRequired,
  match: PropTypes.object
}

export default withRouter(
  connect(
    mapStateToProps,
    { requestDetail }
  )(Detail)
)
