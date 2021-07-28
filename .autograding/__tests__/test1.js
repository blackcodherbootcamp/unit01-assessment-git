const { cleanUp, fileExists, getCommands, getFilesize } = require('../setup.js');
const outputPath = '../output.txt';

// file tests
describe('files', () => {
  const output = fileExists(outputPath);
  const file1 = fileExists('../folder1/file1.txt');
  const file2 = fileExists('../folder2/file2.txt');
  const file3 = fileExists('../file3.txt');

  test('output.txt found', () => {
    expect(output).toEqual(true);
  });

  test('folder1/file1.txt found', () => {
    expect(file1).toEqual(true);
  });

  test('folder2/file2.txt found', () => {
    expect(file2).toEqual(true);
  });

  test('file3.txt not found', () => {
    expect(file3).toEqual(false);
  });
});

// command tests
describe('commands', () => {
  let commands = [];

  beforeAll(done => {
    getCommands(outputPath, (data) => {
      commands = data;
      done();
    });
  });

  afterAll(() => {
    cleanUp();
  });

  test('created folder1', () => {
    expect(commands.find(command => command.endsWith('mkdir folder1'))).toBeTruthy();
  });

  test('created folder2', () => {
    expect(commands.find(command => command.endsWith('mkdir folder2'))).toBeTruthy();
  });

  test('created file1.txt', () => {
    expect(commands.find(command => command.endsWith('touch file1.txt'))).toBeTruthy();
  });
  
  test('created file2.txt', () => {
    expect(commands.find(command => command.endsWith('touch file2.txt'))).toBeTruthy();
  });
  
  test('created file3.txt', () => {
    expect(commands.find(command => command.endsWith('touch file3.txt'))).toBeTruthy();
  });
  
  test('moved file1.txt', () => {
    expect(commands.find(command => command.endsWith('mv file1.txt folder1'))).toBeTruthy();
  });
  
  test('moved file2.txt', () => {
    expect(commands.find(command => command.endsWith('mv file2.txt folder2'))).toBeTruthy();
  });
  
  test('listed folder1 contents', () => {
    const regex = new RegExp('ls(?: -[a-zA-Z]+)?$');
    expect(commands.find(command => command.endsWith('cd folder1'))).toBeTruthy();
    expect(commands.find(command => regex.test(command))).toBeTruthy();
  });
  
  test('displayed current working directory', () => {
    expect(commands.find(command => command.endsWith('pwd'))).toBeTruthy();
  });
  
  test('deleted file3.txt', () => {
    expect(commands.find(command => command.endsWith('cd ..'))).toBeTruthy();
    expect(commands.find(command => command.endsWith('rm file3.txt'))).toBeTruthy();
  });

});
