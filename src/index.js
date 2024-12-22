import _ from 'lodash';

const processToken = (token) => {
  const term = token.match(/\w+/g);
  return term;
};

const countRelevance = (document, searchTerm) => {
  const { text } = document;
  const documentTerms = processToken(text);
  let relevance = 0;
  for (const term of searchTerm) {
    relevance = documentTerms.reduce(
      (acc, documentTerm) => (documentTerm === term ? acc + 1 : acc),
      0
    );
  }

  return relevance;
};

const search = (documents, word) => {
  const searchTerm = processToken(word);
  const matchedDocuments = [];

  for (const document of documents) {
    const { text, id } = document;

    const terms = processToken(text);
    const termsIntersection = _.intersection(searchTerm, terms);

    if (termsIntersection.length > 0) {
      const relevance = countRelevance(document, searchTerm);
      matchedDocuments.push({ id, relevance });
    }
  }

  return matchedDocuments
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ id }) => id);
};

export default search;
