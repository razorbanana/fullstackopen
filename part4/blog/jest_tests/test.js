const listHelper = require('../utils/list_helper')

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = []
  
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('Total likes', () => {
  test('total likes of []', () => {
    const blogs = []
  
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('total likes of blogs with 1 and 2 likes', () => {
    const blogs = [{
      "title": "Example 1",
      "author": "me",
      "url": "/someurl1",
      "likes": 1
    },
    {
      "title": "Example 2",
      "author": "me",
      "url": "/someurl2",
      "likes": 2
    }]
  
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(3)
  })
})

describe('Favourite blog', () => {
  test('Favourite blog of []', () => {
    const blogs = []
  
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toBe(null)
  })

  test('Favourite blog of blogs with 1 and 2 likes', () => {
    const blogs = [{
      "title": "Example 1",
      "author": "me",
      "url": "/someurl1",
      "likes": 1
    },
    {
      "title": "Example 2",
      "author": "me",
      "url": "/someurl2",
      "likes": 2
    }]
  
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      "title": "Example 2",
      "author": "me",
      "url": "/someurl2",
      "likes": 2
    })
  })
})