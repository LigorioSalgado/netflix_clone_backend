
function movies(parent,args,context,info) {
    return context.db.query.movies({},info)
}


module.exports = {
    movies
}