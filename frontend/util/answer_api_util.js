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
