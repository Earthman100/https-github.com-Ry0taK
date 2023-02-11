const fastify = require('fastify')();

fastify.addContentTypeParser('application/csp-report', { parseAs: 'string' }, fastify.getDefaultJsonParser('ignore', 'ignore'));

fastify.post('/csp-error', async (request, reply) => {
    console.log(JSON.stringify(request.body));
    reply.code(204);
    return {};
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) throw err;
    console.log(`Server is listening on ${address}`);
});
