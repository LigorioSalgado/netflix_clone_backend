const { GraphQLServer } =  require('graphql-yoga')

const typeDefs =  `

    type Query{
        description:String
    }
`;

let movies = [];
let idCount = 0;

const resolvers = {

    Query:{
        movies:() => movies
    },
     
    Mutation:{
        createMovie:(root,args) => {
            const movie = {
                id:`id_movie_${idCount++}`,
                title:args.title,
                content:args.content,
            }
            movies.push(movie)
            return movie
        }

    }

}

const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers
})

module.exports = server
