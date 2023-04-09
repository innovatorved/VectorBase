import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

import client from "./client.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outDir = path.join(__dirname, "..", "out");
const testDir = path.join(__dirname, "..", "test");
const testFile = readdirSync(testDir)[0];

const test = Buffer.from(readFileSync(path.join(testDir, testFile))).toString(
  "base64"
);
let limit = 1;

const resImage = await client.graphql
  .get()
  .withClassName("Imgsearch")
  .withFields(["image"])
  .withNearImage({ image: test })
  .withLimit(limit)
  .do();
const result = resImage.data.Get.Imgsearch[0].image;
writeFileSync(path.join(outDir, `result-${0}.jpg`), result, "base64");
