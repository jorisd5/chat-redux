import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createMessage from '../actions/index';

class MessageForm extends Component {
  componentWillMount() {
    this.createMessage();
  }

  createMessage = () => {
    this.props.createMessage('general', author, content);
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
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

