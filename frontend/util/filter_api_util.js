export const search = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};
