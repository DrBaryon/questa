import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const fetchTopic = (id) => dispatch => (
  APIUtil.fetchTopic(id)
    .then(topic => dispatch(receiveTopic(topic)))
);

export const receiveTopic = topic => {
  return ({
    type: RECEIVE_TOPIC,
    topic
  });
};
