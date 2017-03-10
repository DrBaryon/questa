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


export const deleteQuestion = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/questions/${id}`
  });
};
