const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exec } = require("child_process");
const cleanPath = resolvePath('./output.txt');

/**
 * Tests if a file exists
 * @param {string} filePath 
 * @returns 
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(resolvePath(filePath));
  } catch (err) {
    console.log(err);

    return null;
  }
}

/**
 * Gets the size of a file
 * @param {string} filePath 
 * @returns 
 */
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

/**
 * Gets an arry of commands from the (formatted) log file
 * @param {string} outputPath
 * @param {function} callback 
 */
function getCommands(outputPath, callback) {
  try {
    const commands = [];

    formatLog(resolvePath(outputPath), cleanPath, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);

          callback(commands);
      }

      if (stderr) {
          console.log(`stderr: ${stderr}`);

          callback(commands);
      }

      const rl = readline.createInterface({
        input: fs.createReadStream(cleanPath),
        crlfDelay: Infinity
      });

      rl.on('line', (line) => {
        commands.push(line);
      });

      rl.on('close', () => {
        callback(commands);
      });
    });
  } catch (err) {
    console.log(err);

    callback(commands);
  }
}

/**
 * Cleans up the temporary log file
 */
function cleanUp() {
  try {
    fs.unlinkSync(cleanPath);
  } catch(err) {
    console.error(err);
  }
}

function formatLog(filePath, cleanPath, callback) {
  //cat output_bash.txt | perl -pe 's/\e([^\[\]]|\[.*?[a-zA-Z]|\].*?\a)//g' | col -b > output_bash-processed.txt
  exec(`cat ${filePath} | perl -pe 's/\\e([^\\[\\]]|\\[.*?[a-zA-Z]|\\].*?\\a)//g' | col -b > ${cleanPath}`, (error, stdout, stderr) => {
    callback(error, stdout, stderr);
  });
}

function resolvePath(filePath) {
  return path.resolve(__dirname, filePath);
}

module.exports.cleanUp = cleanUp;
module.exports.fileExists = fileExists;
module.exports.getCommands = getCommands;
module.exports.getFilesize = getFilesize;
