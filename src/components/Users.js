import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let div = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          {this.props.userCount > 0 ? div : null}
        </ul>
        {this.props.userCount > 0 ? this.props.userCount : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
