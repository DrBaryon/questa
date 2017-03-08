import {RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS, REMOVE_QUESTION, RECEIVE_COMMENT} from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case REMOVE_QUESTION:
      delete newState[action.question.id];
      return newState;
    default:
      return state;
  }
};

export default QuestionReducer;
