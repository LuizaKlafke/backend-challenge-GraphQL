const { ApolloServer, gql } = require('apollo-server')
const db = require('./database/config/db')

// Requisita tabela info da base de dados.
async function getInfos() {
  const info = await db('infos').select('*')
  return info
};

// Executa função de consulta.
const suitablePlanets = getInfos()

// Pontos de entrada da API.
const typeDefs = gql`
    
    type SuitablePlanet {
        id: Int
        name: String
        mass: Float
        hasStation: String
    }

  type Query {
      suitablePlanets: [SuitablePlanet]
  }
`

// Resolve valores das entradas da API.
const resolvers = {
  Query: {
    suitablePlanets() {
      return suitablePlanets
    },
},
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ db })
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
}) 