import fastify from 'fastify';

const server = fastify({
    logger: {
        transport: {
            target: '@fastify/one-line-logger',
        },
    },
});

server.get('/ping', async (_request, _reply) => {
    return 'pong\n';
});

server.listen({ port: 3000 }, (err, _address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

console.log('dsds');
