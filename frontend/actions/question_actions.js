import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

export const receiveAllQuestions = () => {
  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  };
};

export const removeQuestion = (question) => {
  return {
    type: REMOVE_QUESTION,
    question
  };
};

export const fetchQuestion = (id) => (
  APIUtil.fetchQuestion(id)
  .then(question => dispatch(receiveQuestion(question)))
);

export const fetchAllQuestions = () => (
  APIUtil.fetchAllQuestions()
  .then(questions => dispatch(receiveAllQuestions()))
);

export const createQuestion = (question) => (
  APIUtil.createQuestion(question)
  .then(newQuestion => dispatch(receiveQuestion(newQuestion)))
);

export const deleteQuestion = (id) => (
  APIUtil.deleteQuestion(id)
  .then(question => dispatch(removeQuestion(question)))
);
