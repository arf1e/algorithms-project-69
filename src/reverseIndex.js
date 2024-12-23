import { processToken } from './processor';

export const addReverseIndexEntry = (document, term, reverseIndex) => {
  if (!reverseIndex[term]) {
    reverseIndex[term] = [
      {
        id: document.id,
        relevance: 1,
      },
    ];
    return;
  }

  const indexedDocuments = reverseIndex[term];
  const entry = indexedDocuments.find(({ id }) => id === document.id);
  if (!entry) {
    indexedDocuments.push({
      id: document.id,
      relevance: 1,
    });
    return;
  }
  entry.relevance += 1;
};

export const getIndexedDocumentsForTerm = (termItem, reverseIndex) => {
  return reverseIndex[termItem] || [];
};

export const indexDocument = (document, reverseIndex) => {
  const terms = processToken(document.text);
  for (const term of terms) {
    addReverseIndexEntry(document, term, reverseIndex);
  }
};
