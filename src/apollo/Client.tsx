// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://panuco.stepzen.net/api/linkedin/__graphql',
    headers: {
        'Authorization':
            'apikey panuco::stepzen.io+1000::014516c4b52b2e0d54561a859ad028bdd80a33f5fc570fd1591fc82f0500dac4'
    },
    cache: new InMemoryCache(),
});

export default client;