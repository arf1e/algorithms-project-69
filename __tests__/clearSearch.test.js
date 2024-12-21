import clearSearch from '../src';
import { docs } from './__fixtures__/docs';

describe('clearSearch', () => {
  it('should clear search', () => {
    const search = clearSearch(docs, 'shoot');
    expect(search).toEqual(['doc1', 'doc2']);
  });
});
