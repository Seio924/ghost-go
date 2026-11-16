# ghost-go

실제 바둑판을 아이폰으로 인식해 AI(KataGo Human SL)와 대국하는 웹사이트.

- 기획: `docs/기획서.md`
- 구조·규칙: `docs/아키텍처.md` (폴더 구조, 의존 규칙, 스택, 테스트, Git)
- 화면·음성 문구는 영어(`src/shared/lib/i18n/locales/en.json`), 문서·주석은 한국어.
- Git: `main` + 작업 브랜치, squash merge, Conventional Commits + 한글 요약.
- 커밋 메시지와 PR 본문에 AI 작성 표시(Co-Authored-By, "Generated with ..." 등)를 붙이지 않는다.
