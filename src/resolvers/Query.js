
async function users(parent,args,context,info) { 
    return context.db.query.users({},info)
}

module.exports = {
    users
}