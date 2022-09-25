# Git 에 대하여

## [LearnGitBrancing](https://learngitbranching.js.org/)

::: details

- concepts
  - `git` 은 `snapshot`
    - commit 전환이 빠름
    - `delta` 라는 변경사항만 적용되고, ref 를 여기로 함.
  - `branch` 는 많이 만들어도 메모리에 부담이 안됨.
- `git commit -m [message_title]`
  - `git commit --amend`: 현재커밋 약간 수정하기
- `git checkout [commit-id]`: Head를 분리, 앞의 4개만 입력해도 됨.
  - `git checkout origin/main`: detached head 상태
- `git merge bugFix` (current branch: main)
- `git rebase main` (current branch: bugFix)
  - `git rebase --onto [main] [common_parent_branch] [bugFix]`
  - `git rebase -i [커밋들이 붙을 곳]`: 실제로는 vi editor...
- refspec
  - `^`: 이전
  - `~[num]`: num 번째 전
  - colon refspec: `<source>:<destination>`
- `git reset [되돌아갈 커밋]`: 되돌리기
- `git revert [변경사항을 취소할 커밋]`: 해당 변경사항을 취소한 커밋을 작성하기
- `git cherry-pick [commit1] [commit2] [commit3]`
- `git tag [tag_name] [commit_id]`: 영구적 마일스톤, `commit_id` 지정 안되면 `HEAD`에.
- `git describe ~`: 특정 태그로 부터 얼마나 떨어져있는지
- `git clone`: 원격에서 가져오기
- `git fetch`: 다운로드만
  - `git fetch origin foo`: `foo` 는 `place`
  - `git fetch` 의 colon refspec
    - 체크아웃 안된브랜치만
    - `git push` 랑 순서가 반대 (역할은 같지만 source 가 원격의 요소이므로)
- `git push`: 업로드
  - `git push origin [local_branch]`
  - `git push origin [source]:[desti]`
- `git pull`
  - `git fetch` + `git merge origin/main` = `git pull`
  - `git pull --rebase`: 머지가 아닌 리베이스로 한거
    - 그런데 정책이 바뀌어서, 히스토리가 다를 경우에는 `git pull --merge` 도 명시해줘야함.
  - `git pull` colon refspec 이나 place 도 인자 동일함.
- 원격브랜지 tracking
  - `git chechkout -b customlocalbranchname origin/b1`
  - `git branch -u origin/b1 [local_branch]`: local branch 가 지정되지 않으면 현재 브랜치에.
- source 없음
  - `git push :[desti]`
  - `git fetch :[desti]`: 새 브랜치 생성
:::
