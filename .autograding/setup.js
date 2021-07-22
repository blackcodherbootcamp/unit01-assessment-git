const fs = require('fs');
const path = require("path");

function checkFile(filePath) {
    try {
        return fs.existsSync(path.resolve(__dirname, filePath));
      } catch (err) {
        return null;
      }
}

module.exports.checkFile = checkFile;
