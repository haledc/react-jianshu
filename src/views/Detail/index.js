import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from '../../store/reducers/detail'

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

@connect(
  mapState,
  mapDispatch
)
@withRouter
class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    const { title, content } = this.props

    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

export default Detail