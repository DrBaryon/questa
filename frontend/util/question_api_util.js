export const fetchQuestion = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/questions/${id}`
  });
};

export const fetchAllQuestions = () => {
  return $.ajax({
    type: 'GET',
    url: `/api/questions`
  });
};

export const createQuestion = (question) => {
  return $.ajax({
    type: 'POST',
    url: `/api/questions`,
    data: {question}
  });
};

export const updateQuestion = (id) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/questions/${id}`
  });
};

export const deleteQuestion = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/questions/${id}`
  });
};

export const createAnswer = (answer) => {
  return $.ajax({
    type: 'POST',
    url: `/api/answers`,
    data: {answer}
  });
};

export const fetchAnswer = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/answers/${id}`,
  });
};

export const addComment = (comment) => {
  return $.ajax({
    type: 'POST',
    url: `/api/comments`,
    data: {comment}
  });
};
