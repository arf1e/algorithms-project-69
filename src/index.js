const processToken = (token) => {
  const term = token.match(/\w+/g);
  return term;
};

const isFullyIntersected = (arrayA, arrayB) => {
  const [smallerArray, largerArray] = [arrayA, arrayB].sort(
    (a, b) => a.length - b.length
  );

  for (const item of smallerArray) {
    if (!largerArray.includes(item)) {
      return false;
    }
  }

  return true;
};

const clearSearch = (documents, word) => {
  const searchTerm = processToken(word);
  const result = [];
  for (const document of documents) {
    const { text, id } = document;
    const terms = processToken(text);
    if (isFullyIntersected(terms, searchTerm)) {
      result.push(id);
    }
  }

  return result;
};

export default clearSearch;
