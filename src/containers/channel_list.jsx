import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/index';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannelList = (channel) => {
    return (
      <li
        className={channel === this.props.selectedChannel ? "selectedChannel" : ""}
        key={channel}
        onClick={() => this.handleClick(channel)}
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channelList">
        <span>Redux Chat</span>
        <ul>
          { this.props.channels.map(this.renderChannelList) }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

