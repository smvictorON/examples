// const fs = require('fs').promises;
// const path = require('path');
// const utils = require('./test/utils');

// function getMetadata(pathToCheck) {
//   return fs.stat(pathToCheck)
//     .then(stats => {
//       const isDirectory = stats.isDirectory();

//       if (!isDirectory) {
//         return [pathToCheck];
//       } else {
//         return fs.readdir(pathToCheck)
//           .then(files => files.map(file => path.join(pathToCheck, file)));
//       }
//     })
//     .catch(() => {
//       throw new Error('Invalid Path');
//     });
// }

// function printMetadata(metadata) {
//   const promises = metadata.map(getMetadata);

//   return Promise.all(promises)
//     .then(results => results.flat())
//     .then(flattenedResults => {
//       const metadataPromises = flattenedResults.map(filePath =>
//         fs.stat(filePath).then(stats => {
//           return {
//             fileName: path.basename(filePath),
//             filePath: path.relative(process.cwd(), filePath),
//             size: stats.size,
//             createdAt: stats.birthtime.toISOString().split("T")[0],
//             isDirectory: stats.isDirectory(),
//           };
//         })
//       );

//       return Promise.all(metadataPromises);
//     })
//     .catch(error => {
//       throw new Error(error.message);
//     });
// }

// function app(pathToCheck) {
//   res = Promise.resolve(printMetadata([pathToCheck]));
//   console.log(res)
//   return res
// }

// module.exports = app;



