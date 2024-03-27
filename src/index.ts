import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';

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

server.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'public'),
    prefix: '/public', // optional: default '/',
});

server.log.info('...starting Server');

server.listen({ port: 3000 }, (err, _address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
