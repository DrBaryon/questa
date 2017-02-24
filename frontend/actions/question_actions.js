import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveAnswer = (answer) => {
  return {
    type: RECEIVE_ANSWER,
    answer
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

export const receiveAllQuestions = (questions) => {
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

export const fetchQuestion = (id) => dispatch => (
  APIUtil.fetchQuestion(id)
    .then(question => dispatch(receiveQuestion(question)))
);

export const fetchAllQuestions = () => dispatch => (
  APIUtil.fetchAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)))
);

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question)
    .then(newQuestion => dispatch(receiveQuestion(newQuestion)))
);

export const updateQuestion = (id) => dispatch => (
  APIUtil.updateQuestion(id)
    .then(updatedQuestion => dispatch(receiveQuestion(updatedQuestion)))
);


export const deleteQuestion = (id) => dispatch => (
  APIUtil.deleteQuestion(id)
    .then(question => dispatch(removeQuestion(question)))
);

export const createAnswer = (answer) => dispatch => (
  APIUtil.createAnswer(answer)
    .then(newAnswer => {
      dispatch(receiveAnswer(newAnswer));
    })
);

export const updateAnswer = (answer) => dispatch => (
  APIUtil.updateAnswer(answer)
    .then(updatedAnswer => dispatch(receiveAnswer(newAnswer)))
);

export const createComment = (comment) => dispatch => (
  APIUtil.addComment(comment)
    .then( newComment => dispatch(receiveComment(newComment)))
);
