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

export const addFollow = (follow) => {
  return $.ajax({
    type: 'POST',
    url: `/api/follows`,
    data: {follow}
  });
};

export const removeFollow = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/follows/${id}`
  });
};
