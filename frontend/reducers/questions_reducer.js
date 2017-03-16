import {RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS, REMOVE_QUESTION, RECEIVE_ANSWER, REMOVE_ANSWER, RECEIVE_COMMENT} from '../actions/question_actions';
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
    case RECEIVE_ANSWER:
      let answer = action.answer;
      newState[answer.question_id].answers[answer.id] = answer;
      return newState;
    case REMOVE_ANSWER:
      delete newState[action.answer.question.id].answers[action.answer.id];
      return newState;
    case RECEIVE_COMMENT:
      let comment = action.comment;
      if (comment.commentable_type === "Answer"){
        newState[comment.question_id].answers[comment.commentable_id].comments[comment.id] = comment;
      }
      return newState;
    default:
      return state;
  }
};

export default QuestionReducer;
