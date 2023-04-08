import client from "./client.js";

const ReadSchema = await client.schema.getter().do();
console.log(ReadSchema);