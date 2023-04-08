const path = require('path');

const imageDir = path.join(__dirname, 'test');
const outDir = path.join(__dirname, 'out');

const test = Buffer.from( readFileSync(path.join(imageDir, 'test.jpg')) ).toString('base64');
let limit = 1;
const resImage = await client.graphql.get()
  .withClassName('imgsearch')
  .withFields(['image'])
  .withNearImage({ image: test })
  .withLimit(limit)
  .do();

const result = resImage.data.Get.Meme[0].image;
writeFileSync(path.join( outDir , `result-${0}.jpg`), result, 'base64');