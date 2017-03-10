import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const createComment = (comment) => dispatch => (
  APIUtil.addComment(comment)
    .then( newComment => dispatch(receiveComment(newComment)))
);
