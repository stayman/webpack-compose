const cache = require('./cache')

describe('cache', () => {
  it('should add a cache key', () => {
    expect(cache(true)()).toEqual({
      cache: true
    })
  })
})
