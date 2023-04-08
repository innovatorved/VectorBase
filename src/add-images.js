const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '..', 'image');
const imageFiles = fs.readdirSync(imageDir);

for (const file of imageFiles) {
  const img = fs.readFileSync(path.join(imageDir, file));
  const b64 = Buffer.from(img).toString('base64');
  const img_name = path.parse(file).name;

  await client.data.creator()
    .withClassName('imgsearch')
    .withProperties({
      image: b64,
      text: img_name
    })
    .do();
}
