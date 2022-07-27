# SNPONE-admin

# 프로젝트 소개

원티드 프리온보딩 3주차 과제

(주) 에스엔피랩 기업과제 팀프로젝트 입니다.

# 🚀 [배포 링크(예정)](/)

# 팀원

| 이름   |       팀 구성       |                                                           기능 구현 및 역할                                                            |
| ------ | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| 김수빈 | 팀원 </br> Frontend |                                            - 회원가입(정보입력) </br> - 회원가입 validation                                            |
| 김민주 | 팀원 </br> Frontend |                                      - 회원가입(정보입력) </br> - 회원가입 정보 json server 전송                                       |
| 이상지 | 팀장 </br> Frontend |                                            - admin페이지 구현 </br> - Pagenation </br> 기획                                            |
| 이혜림 | 팀원 </br> Frontend |                  - headers, routing, interactive buttons </br> - mui & lottie & outter layout </br> - 반응형 웹 구현                   |
| 홍승연 | 팀원 </br> Frontend | - 전체데이터 fetch 및 필터링 api 구축 </br> - 당첨여부 체크박스 toggle callback 구현 </br> - search bar 구현 </br> - csv 다운로드 구현 |

</br>
</br>

# 기술 스택

`React.js`
`TypeScript`

`recoil`
`axois`
`date-fns`
`MUI`
`json-server`
`classnames`
`styled-components`
`react-hook-form`
</br>
</br>

# 구현 조건

1. 사용자에게 입력을 받고 해당 내용을 저장하여 열람할 수 있도록 합니다.
2. filtering/sorting 기능을 구현 해봅니다.
3. CVS 다운로드를 구현 해봅니다.

</br>

# 폴더 구조

```text
📦public
 ┣ 📂data
 ┃ ┣ 📜city.json
 ┃ ┣ 📜index.js
 ┃ ┗ 📜user.json
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜logo192.png
 ┣ 📜logo512.png
 ┣ 📜manifest.json
 ┗ 📜robots.txt
 📦src
 ┣ 📂api
 ┃ ┣ 📂http
 ┃ ┃ ┗ 📜HttpRequest.ts
 ┃ ┣ 📂instance
 ┃ ┃ ┗ 📜instance.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜dashboard.ts
 ┃ ┃ ┣ 📜useCityModels.ts
 ┃ ┃ ┗ 📜useUserModels.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜utils.ts
 ┣ 📂components
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📜ExcelDownloadBtn.tsx
 ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┣ 📜ListHeader.tsx
 ┃ ┃ ┣ 📜ListItem.tsx
 ┃ ┃ ┣ 📜PageNation.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜dashboard.css
 ┃ ┣ 📂form
 ┃ ┃ ┣ 📜FormCheckboxBtn.tsx
 ┃ ┃ ┣ 📜FormInput.tsx
 ┃ ┃ ┣ 📜FormRadio.tsx
 ┃ ┃ ┗ 📜FormSelect.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜CircularMenu.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜LandingPage.tsx
 ┃ ┃ ┣ 📜Layout.tsx
 ┃ ┃ ┣ 📜MobileHeader.tsx
 ┃ ┃ ┗ 📜MobileLayout.tsx
 ┃ ┣ 📂signup
 ┃ ┃ ┣ 📜ResidenceSelectModal.tsx
 ┃ ┃ ┣ 📜SignForm.tsx
 ┃ ┃ ┣ 📜Terms.tsx
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┗ 📜.DS_Store
 ┣ 📂elements
 ┃ ┣ 📂Animations
 ┃ ┃ ┣ 📜Animation.styled.ts
 ┃ ┃ ┣ 📜Animation.tsx
 ┃ ┃ ┣ 📜ButtonAnimation.styled.ts
 ┃ ┃ ┗ 📜ButtonAnimation.tsx
 ┃ ┗ 📂Texts
 ┃ ┃ ┣ 📜Subtitle.tsx
 ┃ ┃ ┣ 📜Text.tsx
 ┃ ┃ ┗ 📜Title.tsx
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┣ 📜Dashboard.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜NotFound404.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂routes
 ┃ ┗ 📜routes.tsx
 ┣ 📂static
 ┃ ┣ 📂Infomations
 ┃ ┃ ┗ 📜ProfileCardInfo.ts
 ┃ ┣ 📂animations
 ┃ ┃ ┣ 📜arrow.json
 ┃ ┃ ┣ 📜business-background.json
 ┃ ┃ ┣ 📜complete.json
 ┃ ┃ ┣ 📜error-404-background.json
 ┃ ┃ ┣ 📜joyful-background.json
 ┃ ┃ ┣ 📜loop.json
 ┃ ┃ ┣ 📜natural-background.json
 ┃ ┃ ┣ 📜spin-background.json
 ┃ ┃ ┣ 📜spin2-background.json
 ┃ ┃ ┣ 📜spin3-background.json
 ┃ ┃ ┣ 📜spring-background.json
 ┃ ┃ ┗ 📜underwater-background.json
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜MaruBuri-Bold.woff
 ┃ ┃ ┣ 📜MaruBuri-Light.woff
 ┃ ┃ ┣ 📜MaruBuri-Regular.woff
 ┃ ┃ ┣ 📜SpoqaHanSansNeo-Bold.woff
 ┃ ┃ ┣ 📜SpoqaHanSansNeo-Light.woff
 ┃ ┃ ┗ 📜SpoqaHanSansNeo-Regular.woff
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜background-mobile-phones.png
 ┃ ┃ ┣ 📜d.png
 ┃ ┃ ┗ 📜e.png
 ┣ 📂store
 ┃ ┣ 📜dashboard.ts
 ┃ ┣ 📜form.ts
 ┃ ┗ 📜global.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalFonts.ts
 ┃ ┣ 📜GlobalStyles.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜dashboard.d.ts
 ┃ ┣ 📜form.d.ts
 ┃ ┗ 📜types.d.ts
 ┣ 📂util
 ┃ ┣ 📜getAnimations.tsx
 ┃ ┗ 📜replaceItemIndex.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜setupTests.ts
📜.eslintrc.js
📜.gitignore
📜.prettierrc
📜README.md
📜package-lock.json
📜package.json
📜tsconfig.json
```

</br>

# 상세 기능 구현 설명

### 1. UI

#### outter layout 배치 및 구현

- 전체적인 색감을 일치시키고 사용자의 동선을 생각하여 라우팅하였습니다.
- 버튼에 툴팁, 적절한 아이콘 배치 등으로 ux를 향상시키려 노력했습니다.

#### animations & interations

- lottie files를 활용하여 남는 공간에 적은 용량으로 애니메이션 효과를 주었습니다.

#### responsive web

- 내부 컨텐츠의 상황에 맞게 최대한 많은 기기를 지원하도록 반응형 웹을 제작하였습니다.

</br>

### 2. 지원하기 form (정보입력)

![form](https://user-images.githubusercontent.com/90506668/181164836-9e0b33d0-687e-456c-b92b-5cb62507eb7c.gif)

#### UI

- mui 라이브러리를 이용해 form UI 구현

#### Validation

- react hook form으로 유효성 검사 (정규식, 버튼 활성화)

#### Data post

- react hook form으로 입력폼의 값을 api로 json server전달

</br>

### 3. Admin - User Management

#### data fetch & filter api

- 리코일을 이용해 전체데이터 fetch 및 필터링 api 구축

#### 당첨여부 체크박스 toggle callback 구현

- 클릭 시 당첨여부를 변경하는 patch api 실행

#### search bar 구현

- 필터 로직 연결

#### csv 다운로드 구현
