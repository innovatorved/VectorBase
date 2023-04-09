import Schema from "../model/Image.js";
import client from "./client.js";

await client.schema.classCreator().withClass(Schema).do();
