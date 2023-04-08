import { readdirSync, readFileSync } from "fs";
import path from "path";
import client from "./client.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const imageDir = path.join(__dirname, "..", "image");
const imageFiles = readdirSync(imageDir);

for (const file of imageFiles) {
  const img = readFileSync(path.join(imageDir, file));
  const b64 = Buffer.from(img).toString("base64");
  const img_name = path.parse(file).name;

  await client.data
    .creator()
    .withClassName("imgsearch")
    .withProperties({
      image: b64,
      text: img_name,
    })
    .do();
}
