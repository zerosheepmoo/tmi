1. 형상관리 시스템은 왜 나오게 되었을까요? --> In order to simplify the collaboration process between development teams. It solves the problem o of reducing conflict when merging different features worked by separate developers. 

2. git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요? 
Git is a branch based version control system where you can work on specific features or roles without affecting the main project. This alallows developers to focus more on coding and less on cleaning up code to match with others. Additionally, it informs you of the changes that have taken place, and you can retrieve them. 

3. git과 GitHub은 어떻게 다를까요? Git is a version control system and Github is a remote repository hub where people can upload their projects, share them, and other people can download them and contribute to them all using the GIT version control. Github is NOT a version control system.

4. git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
Clone: It is used when you "copy" or download code from a remote repository (such as from github) to your local computer. 
Add: It is used to "stage" your changes on your local computer before you actually commit. This means that you can choose what code goes into your commit or not. 
Commit: Is when you actually take a snapshot of the code that you selected using "Add". 
Push: Is when you upload your local changes to the main remote repository so that the remote repository reflects that changes you have made locally. 
Pull: Pull is a combination between fetch and merge where you download the changes made into the remote repository into your local computer and fill the changes that happened remotely. Then, it merges your mhighlighted branch with the latest remote changes into a commit. 
Stash: it takes a screenshot of all your working directory and index so you can go back to a clean working directory. 

5. git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
Object: an object is a key where git points to a certain file.
Head: refers to the selected commit. 
Branch: branch points to the commit. **head points to branch. 
Tag: Represents a version of a branch at a particular commit. 

Git saves the history of a project through commits, where they are all connected in a tree-like fashion and each points to its predecessor. From such, you can access the previous commits and in this way you can "save" progress. 

6. 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
git rm --cached file_to_remove.txt
