const fs = require('fs');
const path = require("path");

function fileExists(filePath) {
  try {
    return fs.existsSync(resolvePath(filePath));
  } catch (err) {
    console.log(err);

    return null;
  }
}

function getFilesize(filePath) {
  try {
    var stats = fs.statSync(resolvePath(filePath));
    var fileSizeInBytes = stats.size;
    
    return fileSizeInBytes / (1024*1024);
  } catch (err) {
    console.log(err);

    return null;
  }
}

function resolvePath(filePath) {
  return path.resolve(__dirname, filePath);
}

module.exports.fileExists = fileExists;
module.exports.getFilesize = getFilesize;
