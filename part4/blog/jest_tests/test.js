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
      "author": "me1",
      "url": "/someurl1",
      "likes": 1
    },
    {
      "title": "Example 2",
      "author": "me2",
      "url": "/someurl2",
      "likes": 2
    }]
  
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      "title": "Example 2",
      "author": "me2",
      "url": "/someurl2",
      "likes": 2
    })
  })
})

describe('mostBlogs', () => {
  test('Author with most blogs from an empty array', () => {
    const blogs = [];

    const result = listHelper.mostBlogs(blogs);

    expect(result).toEqual({ author: '', blogs: 0 });
  });

  test('Author with most blogs from an array with different authors', () => {
    const blogs = [
      {
        "title": "Example 1",
        "author": "me1",
        "url": "/someurl1",
        "likes": 1
      },
      {
        "title": "Example 2",
        "author": "me2",
        "url": "/someurl2",
        "likes": 2
      },
      {
        "title": "Example 3",
        "author": "me1",
        "url": "/someurl3",
        "likes": 3
      },
      {
        "title": "Example 4",
        "author": "me3",
        "url": "/someurl4",
        "likes": 4
      },
      {
        "title": "Example 5",
        "author": "me2",
        "url": "/someurl5",
        "likes": 5
      }
    ];

    const result = listHelper.mostBlogs(blogs);

    expect(result).toEqual({ author: 'me1', blogs: 2 });
  });

  test('Author with most blogs from an array with one author', () => {
    const blogs = [
      {
        "title": "Example 1",
        "author": "me1",
        "url": "/someurl1",
        "likes": 1
      },
      {
        "title": "Example 2",
        "author": "me1",
        "url": "/someurl2",
        "likes": 2
      },
      {
        "title": "Example 3",
        "author": "me1",
        "url": "/someurl3",
        "likes": 3
      }
    ];

    const result = listHelper.mostBlogs(blogs);

    expect(result).toEqual({ author: 'me1', blogs: 3 });
  });
});