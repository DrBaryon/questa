import * as APIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = (answer) => {
  return {
    type: RECEIVE_ANSWER,
    answer
  };
};

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
