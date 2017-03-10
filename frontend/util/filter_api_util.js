export const search = (searchterm ) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};
