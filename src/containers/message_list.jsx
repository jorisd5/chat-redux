import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setMessages from '../actions/index';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.created_at} message={message} />
      );
    });
  }

  render() {
    return (
      <div className="messageList">
        <div className="messageListHeader">
          <h1>Channel</h1>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
