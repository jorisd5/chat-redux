import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  renderList() {
    return this.props.messages.map((chatMessage) => {
      return (
        <Message key={chatMessage.created_at} message={chatMessage} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

function mapStateToProps(state) {
  debugger
  return {
    messages: state.messages
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
