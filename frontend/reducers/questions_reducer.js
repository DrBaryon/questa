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
      debugger
      delete newState[action.question.id];
      return newState;
    case RECEIVE_ANSWER:
      const answer = action.answer;
      return merge({}, state, {[answer.question.id]: {["answers"]:
        {[answer.id]: answer}}});
    case REMOVE_ANSWER:
      debugger
      delete newState[action.answer.question.id].answers[action.answer.id];
      return newState;
    case RECEIVE_COMMENT:
      const comment = action.comment;
      for (let id in newState) {
        const question = newState[id];
        question.answers.forEach((answer) => {
          if (answer.id === comment.commentable.id){
            answer.comments.push(comment);
          }
        });
      }
      return newState;
    default:
      return state;
  }
};

export default QuestionReducer;
