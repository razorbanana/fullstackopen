const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, nextBlog)=> sum+nextBlog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if(blogs.length > 0){
        return blogs.reduce((fav, nextBlog) => nextBlog.likes > fav.likes ? nextBlog:fav, blogs[0])
    }else{
        return null
    }
    
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}