import weaviate from 'weaviate-ts-client';
import Schema from "../model/Image.js";

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

await client.schema
    .classCreator()
    .withClass(Schema)
    .do();
