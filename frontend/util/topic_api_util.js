export const fetchTopic = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/topics/${id}`
  });
};

export const fetchAllTopics = (searchTerm) => {
  return $.ajax({
    type: 'GET',
    url: `/api/topics`,
    data: {searchTerm: searchTerm}
  });
};
