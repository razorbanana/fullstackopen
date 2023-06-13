const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, nextBlog)=> sum+nextBlog.likes, 0)
}

module.exports = {
    dummy,
    totalLikes
}