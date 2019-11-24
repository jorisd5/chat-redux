import { FETCH_MESSAGES, POST_MESSAGE, CHANNEL_SELECTED } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED:
      return [];
    default:
      return state;
  }
}

