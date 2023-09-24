## Git Commands

## add files to git
```bash
git add index.html 
        OR  
git add -A (This will add all files)
```

## commit files to git
```bash
git commit -m "This is a message"
```

## push files to git
```bash
git push
    OR
git push -u origin myBranchName  (This will set upstream)
```

## pull files from remote
```bash
git pull
```

## List all my branches
```bash
git branch
```

## Switch branches 
```bash
git checkout anotherBranch
```
## Switch to previous branch
```bash
git checkout -
```

## Create a new branch 
```bash
git checkout -b newBranchName
```

## Delete local branch 
```bash
git branch -d branch_name
        OR
git branch -D branch_name
```

## Delete remote branch 
```bash
git push --delete <remote_name> <branch_name>
 
 Example:
 git push --delete origin myBranchNameToBeDeleted
```

## How to remove local (untracked) files from the current Git working tree
```bash
git clean -f
git clean -fd (This will also delete untracked folders from git)

```
## How to go back to specific branch and delete histor commits:

1) git reset --hard c14809fa
2) git push -f

This will delete all previous commits even from remote branch
   



## UNIX COMANDS
```bash
control + A  ===> takes me to beginning of terminal line
control + E  ===> takes me to end of terminal line

##copy file:
cp oldFileName newFile (This will copy content from oldFile to newFile)

##copy folder
copy content from Folder1 to Folder2
cp -a ~/path/Documents/Folder1 ~/path/Documents/Folder2

##Delete a file:
rm fileTobeDeleted (this will delete file "fileTobeDeleted")

## Create file
touch newFile.txt

##Create a directory
mkdir  (This will create a new directory)

##Delete a Folder
rm -rf folderToBeDeleted (This will delete folder "folderToBeDeleted")

##Update file name

mv oldFileName newFileName

```
