export const fetchTopic = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/topics/${id}`
  });
};

export const fetchAllTopics = () => {
  return $.ajax({
    type: 'GET',
    url: `/api/topics`
  });
};
