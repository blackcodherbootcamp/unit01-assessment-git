# Command Line and Git Assessment

For your unit 1 assessment you are required to create a Github repository containing an output file of commands. Run through the [assessment steps](#assessment-steps) below to create the specified directories and files. By the due date of this assessment you must have what is stated in the [criteria](#assessment-criteria) pushed to your GitHub ready to be marked.

## Assessment Steps

Open a terminal/command prompt. To capture the terminal session and all the commands entered into the terminal, enter the following command:

```sh
> script output.txt
```
This will record all commands entered in to your terminal and save them to a file called `output.txt`.

To record a script using the Linux `script` command on a windows machine you will need to have the windows subsystem for Linux (WSL 2) installed **OR** alternatively, you can use the PowerShell transcript command:

```powershell
> Start-Transcript -Path "output.txt"
```

Once the capture session has started, run through the following steps. Using terminal commands:

1. Create two directories called `folder1` and `folder2`.
1. Create three files called `file1.txt`, `file2.txt` and `file3.txt`.
1. Move `file1.txt` into the `folder1` directory.
1. Move `file2.txt` into the `folder2` directory.
1. Change directory current by navigating to `folder1`.
1. List the current directory files and folders.
1. In `folder1` create a file called `full.txt` with a file size of 2MB.

**HINT:** the following command creates an empty 4 MB file called `example.log` in Linux
```sh
# Linux/MacOs command
> truncate -s 4m example.log
```

```sh
# Windows command
> fsutil file createnew example.log 4194304
```

8. Delete the file `file3.txt` in the directory `folder1`.

**To end the session type the following into the terminal window `Ctrl`+`D`**. 

**To end the session on windows Powershell type the following into the terminal:**

```powershell
Stop-Transcript
```

## Assessment Criteria

Your final repository should have the following files and directories:

```
unit-01-assessment-git/
  |
  |--- folder1/
      |--- file1.txt
  |--- folder2/
      |--- file2.txt
      |--- full.txt
  |--- output.txt
  |--- README.md
```

The file `output.txt` should contain all the command line arguments used to create the files and directories above including navigating between directories and listing directory contents.

## How to submit

Commit all created/generated files and folders to the repo and push to your remote repo for assessment.


