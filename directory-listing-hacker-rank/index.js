const fs = require('fs');
const path = require('path');
const utils = require('./test/utils')

function getMetadata(pathToCheck) {
  return new Promise((resolve, reject) => {
    fs.stat(pathToCheck, (err, stats) => {
      if (err)
        reject(new Error('Invalid Path'));
      else {
        const isDirectory = stats.isDirectory();

        if (!isDirectory)
          resolve([pathToCheck]);
        else
          fs.readdir(pathToCheck, (err, files) => {
            if (err)
              reject(new Error('Invalid Path'));
            else {
              const fileMetadata = files.map(file => path.join(pathToCheck, file));
              resolve(fileMetadata);
            }
          });
      }
    });
  });
}

function printMetadata(metadata) {
  const promises = metadata.map(getMetadata);

  return Promise.all(promises)
    .then(results => {
      const flatResults = results.flat();
      const metadataList = flatResults.map(filePath => {
        const stats = fs.statSync(filePath);

        return {
          fileName: path.basename(filePath),
          filePath: path.relative(process.cwd(), filePath),
          size: stats.size,
          createdAt: utils.dateFormat(stats.birthtime.toISOString().split("T")[0]),
          isDirectory: stats.isDirectory()
        };
      });
      return metadataList;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

const main = (pathToCheck) => {
  return printMetadata([pathToCheck])
};

module.exports = main;
