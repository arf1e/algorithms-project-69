import clearSearch from '../src';
import { docs } from './__fixtures__/docs';

describe('clearSearch', () => {
  it('should perform clear search', () => {
    const search = clearSearch(docs, 'shoot');
    expect(search).toEqual(['doc1', 'doc2']);
  });

  it('should omit punctuation marks', () => {
    expect(clearSearch(docs, 'pint')).toEqual(['doc1']);
    expect(clearSearch(docs, 'pint!')).toEqual(['doc1']);
  });
});
