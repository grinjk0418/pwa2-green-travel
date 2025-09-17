import Header from './components/common/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { localStorageUtil } from './utils/localStorageUtil';
import { dateFormatter } from './utils/dateFormatter';

function App() {
  
  useEffect(() => {
    // TODO
    // 로컬스토리지에 저장된 날짜를 획득
    const clearDate = localStorageUtil.getClearDate();
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    // 로컬스토리지의 날짜와 오늘 날짜가 다를 경우
    if(clearDate !== nowDate) {
      localStorageUtil.clearLocalstorage();
      localStorageUtil.setClearDate(nowDate);

      // state가 초기화 되지 않는 형상을 해결하기 위해, 강제로 화면 새로고침
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>

      {/* 스크롤 초기화, 최상위 컴포넌트에 한번만 추가 */}
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default App
