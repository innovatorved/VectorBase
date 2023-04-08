const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

const testDir = path.join(__dirname, 'test');
const testFile = fs.readdirSync(testDir)[0];
const test = Buffer.from(fs.readFileSync(path.join(testDir, testFile))).toString('base64');


let limit = 1;
const resImage = await client.graphql.get()
  .withClassName('imgsearch')
  .withFields(['image'])
  .withNearImage({ image: test })
  .withLimit(limit)
  .do();

const result = resImage.data.Get.imgsearch[0].image;
fs.writeFileSync(path.join( outDir , `result-${0}.jpg`), result, 'base64');