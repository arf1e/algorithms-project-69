const clearSearch = (documents, word) => {
  const result = [];
  for (const document of documents) {
    const { text, id } = document;
    const words = text.split(' ');
    if (words.includes(word)) {
      result.push(id);
    }
  }

  return result;
};

export default clearSearch;
