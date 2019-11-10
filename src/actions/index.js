// TODO: add and export your own actions
const initialState = {
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // prompt("What is your username?") ||
  selectedChannel: 'general',
  channels: ['general', 'react', 'paris'],
  messages:
  [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ]
};

export default function setMessages() {
  return {
    type: 'FETCH_MESSAGES',
    payload: initialState.messages
  };
}
