import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_FOLLOWED_TOPIC = 'RECEIVE_FOLLOWED_TOPIC';
export const REMOVE_FOLLOWED_TOPIC = 'REMOVE_FOLLOWED_TOPIC';

export const fetchTopic = (id) => dispatch => (
  APIUtil.fetchTopic(id)
    .then(topic => dispatch(receiveTopic(topic)))
);

export const fetchAllTopics = (searchTerm) => dispatch => (
  APIUtil.fetchAllTopics(searchTerm)
    .then(topics => dispatch(receiveAllTopics(topics)))
)

export const addFollow = (follow) => dispatch => (
  APIUtil.addFollow(follow)
    .then(newFollow => dispatch(receiveFollowedTopic(newFollow)))
);

export const removeFollow = (id) => dispatch => (
  APIUtil.removeFollow(id)
    .then(removedFollow => dispatch(removeFollowedTopic(removedFollow)))
);


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

export const receiveFollowedTopic = follow => {
  return ({
    type: RECEIVE_FOLLOWED_TOPIC,
    follow
  })
}

export const removeFollowedTopic = follow => {
  return ({
    type: REMOVE_FOLLOWED_TOPIC,
    follow
  })
}
