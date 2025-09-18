프로젝트 전 깔아야 할 라이브러리

(리액트 라우터, 리덕스, 리덕스 텅크, 엑시오스)

명령어 : 페키지 제이슨 있는 폴더에서 
npm i react-router-dom @reduxjs/toolkit react-redux redux-thunk axios

--------PWA 작업 설정 ---------
** PWA 적용**
1. 설치
    - npm i -D vite-plugin-pwa

2. Manifest 설정
    - `vite.config.js`에 PWA Manifest 설정을 추가
    - 아이콘 이미지는 아래의 사이즈 별로 필요
        - 180x180(IOS), 192x192(web | Android), 515x515(web | Android)

3. 서비스 워커 작성
    - `src/sw.js`, `src/swRegister.js` 파일 생성 //`src/sw.js`는 실제 서비스 워커 파일이고 `src/swRegister.js`는 서비스 워커 등록하기 위한 파일

4. `src/main.jsx`에 서비스 워커 레지스터 추가

5. `index.html`에 mata데이터 설정(IOS 대응 및 Manifest 기본 설정)

6. 위 설정 완료 후 빌드
    npm run build

7. 빌드한 것으로 동작하는 내장서버 실행
    npm run preview