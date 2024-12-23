import { orderByRelevance } from './relevance';
import { getIndexedDocumentsForTerm, indexDocument } from './reverseIndex';

const processToken = (token) => {
  const term = token.match(/\w+/g);
  return term;
};

const search = (documents, input) => {
  const searchTerms = processToken(input);
  const index = {};
  const matchedDocuments = [];

  for (const document of documents) {
    indexDocument(document, index);
  }

  for (const term of searchTerms) {
    matchedDocuments.push(...getIndexedDocumentsForTerm(term, index));
  }

  return orderByRelevance(matchedDocuments).map(({ id }) => id);
};

export default search;
