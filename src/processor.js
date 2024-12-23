export const processToken = (token) => {
  const term = token.match(/\w+/g);
  return term;
};
