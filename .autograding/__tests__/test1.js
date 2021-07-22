const { checkFile } = require('../setup.js');
const output = checkFile('../output.txt');
const file1 = checkFile('../folder1/file1.txt');
const file2 = checkFile('../folder2/file2.txt');
const full = checkFile('../folder2/full.txt');
const file3 = checkFile('../file3.txt');

// presence tests
describe('file presence', () => {
  test('output.txt found', () => {
    expect(output).toEqual(true);
  });

  test('folder1/file1.txt found', () => {
    expect(file1).toEqual(true);
  });

  test('folder2/file2.txt found', () => {
    expect(file2).toEqual(true);
  });

  test('folder2/full.txt found', () => {
    expect(full).toEqual(true);
  });

  test('file3.txt not found', () => {
    expect(file3).toEqual(false);
  });
});
