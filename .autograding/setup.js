const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

function getCommands(filePath, callback) {
  try {
    const commands = [];
    const regex = new RegExp(']2;([a-zA-Z0-9 =/\.\-]+).{2}]1;');
    const rl = readline.createInterface({
      input: fs.createReadStream(resolvePath(filePath)),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      if(regex.test(line)) {
        commands.push(regex.exec(line)[1]);
      }
    });

    rl.on('close', () => {
      callback(commands);
    });
  } catch (err) {
    console.log(err);

    return null;
  }
}

function resolvePath(filePath) {
  return path.resolve(__dirname, filePath);
}

module.exports.fileExists = fileExists;
module.exports.getCommands = getCommands;
module.exports.getFilesize = getFilesize;
