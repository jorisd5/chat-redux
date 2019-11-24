import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img src="assets/images/Logo_wagon.png" alt="logo" className="messaging-logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
