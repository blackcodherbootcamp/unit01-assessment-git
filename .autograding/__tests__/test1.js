const { fileExists, getFilesize } = require('../setup.js');

// presence tests
describe('file presence', () => {
  const output = fileExists('../output.txt');
  const file1 = fileExists('../folder1/file1.txt');
  const file2 = fileExists('../folder2/file2.txt');
  const full = fileExists('../folder1/full.txt');
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

  test('folder1/full.txt found', () => {
    expect(full).toEqual(true);
  });

  test('file3.txt not found', () => {
    expect(file3).toEqual(false);
  });
});

// size tests
describe('file size', () => {
  const fullSize = getFilesize('../folder1/full.txt');

  test('folder1/full.txt is 2MB', () => {
    expect(fullSize).toBe(2);
  });
});
