import { RECEIVE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const TopicReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

export default TopicReducer;
