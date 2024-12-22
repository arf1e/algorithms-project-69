import search from '../src';
import { docs } from './__fixtures__/docs';

describe('clearSearch', () => {
  it('should perform clear search', () => {
    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
  });

  it('should omit punctuation marks', () => {
    expect(search(docs, 'pint')).toEqual(['doc1']);
    expect(search(docs, 'pint!')).toEqual(['doc1']);
  });

  it('should order search results by relevance', () => {
    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
  });
});
