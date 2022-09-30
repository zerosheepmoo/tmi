# Quest00

### Checklist

1. 형상관리 시스템은 왜 나오게 되었을까요?
    - 버전 컨트롤과 협업을 위해
2. git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
    - 분산형 형상관리 시스템: local에 저장한 이후에 원격 저장소에 저장하는 방식
    2-1. git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
    - 보다 효율적으로 여러 사람들과 협업하기 위해
    - 보다 효율적으로 버전 관리를 실행하기 위해
3. git과 GitHub은 어떻게 다를까요?
    - git: 형상관리 소프트웨어
    - GitHub: git을 통해 저장한 파일들의 저장소
4. git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
    - clone: repository를 로컬로 복사
    - add: 변경된 부분을 repo에 반영하기 전에 업로드함
    - commit: add한 변경된 부분을 repo에 반영
    - push: 로컬 repo를 원격 repo에 반영
    - pull: 원격 repo에서 fetch한 새로운 변경된 부분을 local repo에 반영
    - stash: commit하지 않은 변경된 부분을 업로드함
5. git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
6. 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
    - revert 등의 롤백 기능 사용