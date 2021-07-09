const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Spritesmith = require('spritesmith');

glob(`input/program/source/**/*.png`, (err, files) => {
  if (err) {
    throw err;
  }
  Spritesmith.run({
    src: files,
    algorithm: 'binary-tree'
  }, (err, result) => {
    if (err) {
      throw err;
    }

    // Output the image
    fs.writeFileSync(`input/program/sprite.png`, result.image);

    // Output the json
    const spriteJson = {};
    Object.keys(result.coordinates).forEach(filename => {
      const key = path.basename(filename).split('.')[0];
      spriteJson[key] = result.coordinates[filename];
    });
    fs.writeFileSync(`input/program/sprite.json`, JSON.stringify(spriteJson));
  });
});