import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchMessages from '../actions/index';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
        <div className="channel-container" ref={(list) => { this.list = list; }}>
          {this.renderList()}
        </div>
        <MessageForm />
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
