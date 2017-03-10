export const fetchTopic = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/topic/${id}`
  });
};
