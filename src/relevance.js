export const orderByRelevance = (matchedDocuments) => {
  const relevanceHash = {};
  for (const document of matchedDocuments) {
    if (!relevanceHash[document.id]) {
      relevanceHash[document.id] = document.relevance;
      continue;
    }

    relevanceHash[document.id] += document.relevance;
  }

  return Object.entries(relevanceHash)
    .sort((a, b) => b[1] - a[1])
    .map(([id, relevance]) => ({ id, relevance }));
};
