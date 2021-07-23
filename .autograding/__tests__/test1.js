const { fileExists, getCommands, getFilesize } = require('../setup.js');

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

// command tests
describe('commands', () => {
  test('created folder1', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('mkdir folder1');
    });
  });

  test('created folder2', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('mkdir folder2');
    });
  });

  test('created file1.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('touch file1.txt');
    });
  });
  
  test('created file2.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('touch file2.txt');
    });
  });
  
  test('created file3.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('touch file3.txt');
    });
  });
  
  test('moved file1.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('mv file1.txt folder1');
    });
  });
  
  test('moved file2.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('mv file2.txt folder2');
    });
  });
  
  test('deleted file3.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('rm file3.txt');
    });
  });
  
  test('listed folder1 contents', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('cd folder1');
      expect(commands.find(command => command.startsWith('ls'))).toBeTruthy();
    });
  });
  
  test('created full.txt', () => {
    getCommands('../output.txt', (commands) => {
      expect(commands).toContain('dd if=/dev/zero bs=1 count=0 seek=2m of=full.txt');
    });
  });

});
