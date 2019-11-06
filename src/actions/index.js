// TODO: add and export your own actions
const initialState = {
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general',
  channels: ['general', 'react', 'paris'],
  messages: []
};
