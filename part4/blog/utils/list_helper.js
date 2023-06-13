const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, nextBlog) => sum + nextBlog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length > 0) {
        return blogs.reduce((fav, nextBlog) => nextBlog.likes > fav.likes ? nextBlog : fav, blogs[0])
    } else {
        return null
    }

}

function mostBlogs(blogs) {
    const blogCountByAuthor = {};

    for (const blog of blogs) {
        if (blogCountByAuthor.hasOwnProperty(blog.author)) {
            blogCountByAuthor[blog.author]++;
        } else {
            blogCountByAuthor[blog.author] = 1;
        }
    }

    let topAuthor = '';
    let maxBlogs = 0;

    for (const author in blogCountByAuthor) {
        if (blogCountByAuthor[author] > maxBlogs) {
            topAuthor = author;
            maxBlogs = blogCountByAuthor[author];
        }
    }

    return {
        author: topAuthor,
        blogs: maxBlogs
    };
}

function mostLikes (blogs) {
    const LikesCountByAuthor = {};

    for (const blog of blogs) {
        if (LikesCountByAuthor.hasOwnProperty(blog.author)) {
            LikesCountByAuthor[blog.author] += blog.likes;
        } else {
            LikesCountByAuthor[blog.author] = blog.likes;
        }
    }

    let topAuthor = '';
    let maxLikes = 0;

    for (const author in LikesCountByAuthor) {
        if (LikesCountByAuthor[author] > maxLikes) {
            topAuthor = author;
            maxLikes = LikesCountByAuthor[author];
        }
    }

    return {
        author: topAuthor,
        likes: maxLikes
    };
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes 
}