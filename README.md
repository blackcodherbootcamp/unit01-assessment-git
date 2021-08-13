# Command Line and Git Assessment

For your unit 1 assessment you are required to create a Github repository containing an output file of commands. Run through the [assessment steps](#assessment-steps) below to create the specified directories and files. By the due date of this assessment you must have what is stated in the [criteria](#assessment-criteria) pushed to your GitHub ready to be marked.

## Assessment Steps

Open a terminal window and check you are in the main directory of your repository. 

To capture the terminal session and all the commands entered into the terminal, enter the following command:

```sh
> TERM=dumb script output.txt
```
This will record all commands entered in to your terminal and save them to a file called `output.txt`.

**Windows users:**
To record a script using the Linux `script` command, you will need to have the Windows Subsystem for Linux installed and Windows Terminal configured to use the Ubuntu shell.

Once the capture session has started, run through the following steps in a terminal:

1. Create two directories called `folder1` and `folder2`.
1. Create three files called `file1.txt`, `file2.txt` and `file3.txt`.
1. Move `file1.txt` into the `folder1` directory.
1. Move `file2.txt` into the `folder2` directory.
1. Change directory by navigating to `folder1`.
1. List the current directory files and folders.
1. In `folder1`, confirm the present working directory.
1. Navigate back to the parent directory and delete the file `file3.txt`.

**To end the session, type `exit` into the terminal window**.

## Assessment Criteria

Your final repository should contain the following files and directories:

```
[your local repository directory]
  |
  |--- folder1/
      |--- file1.txt
  |--- folder2/
      |--- file2.txt
  |--- output.txt
  |--- README.md
```

The file `output.txt` should contain all the command line arguments used to create the files and directories above including navigating between directories and listing directory contents.

## How to submit

Commit all created/generated files and folders to the repo and push to your remote repo for assessment.


