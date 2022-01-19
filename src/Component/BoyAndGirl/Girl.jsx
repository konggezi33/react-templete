import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
class Girl extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <h2>I am girl</h2>
        <div>{this.props.status ? '你的爱心有毒，我不要': '相安无事'}</div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Girl)