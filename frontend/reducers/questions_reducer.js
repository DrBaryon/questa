import {RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS, REMOVE_QUESTION} from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUESTION:
      const stateAfterReceive = merge({}, state, {[action.question.id]: action.question});
      return stateAfterReceive;
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case REMOVE_QUESTION:
      const stateAfterRemove = merge({}, state);
      delete stateAfterRemove[action.question.id];
      return stateAfterRemove;
    default:
      return state;
  }
};

export default QuestionReducer;
