import {RECEIVE_ANSWER} from '../actions/question_actions';
import merge from 'lodash/merge';

const AnswerReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    default:
      return state;
  }
};

export default AnswerReducer;
