export const addComment = (comment) => {
  return $.ajax({
    type: 'POST',
    url: `/api/comments`,
    data: {comment}
  });
};
