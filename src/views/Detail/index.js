import React, { PureComponent } from 'react'
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

@connect(
  mapStateToProps,
  mapDispatchToProps
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
