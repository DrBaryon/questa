import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';

export const fetchTopic = (id) => dispatch => (
  APIUtil.fetchTopic(id)
    .then(topic => dispatch(receiveTopic(topic)))
);

export const fetchAllTopics = (searchTerm) => dispatch => (
  APIUtil.fetchAllTopics(searchTerm)
    .then(topics => dispatch(receiveAllTopics(topics)))
)

export const receiveTopic = topic => {
  return ({
    type: RECEIVE_TOPIC,
    topic
  });
};

export const receiveAllTopics = topics => {
  return ({
    type: RECEIVE_ALL_TOPICS,
    topics
  });
};
