import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchMessages from '../actions/index';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages('general');
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
        <div className="channel-container">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
