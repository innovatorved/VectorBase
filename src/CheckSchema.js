import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const ReadSchema = await client.schema.getter().do();
console.log(ReadSchema);