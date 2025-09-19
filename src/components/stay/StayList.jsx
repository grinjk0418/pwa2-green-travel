import { useDispatch, useSelector } from 'react-redux';
import './StayList.css';
import { useEffect } from 'react';
import { stayIndex } from '../../store/thunks/StayThunk.js';
import { useNavigate } from 'react-router-dom';
import { setScrollEventFlg } from '../../store/slices/staySlice.js';


function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const StayList = useSelector(state => state.stay.list)
  const scrollEventFlg = useSelector(state => state.stay.scrollEventFlg);
  
  useEffect(() => {

    window.addEventListener('scroll', addNextPage);

    if(StayList.length === 0) {
      dispatch(stayIndex());
    }
    
    return () => {
      window.removeEventListener('scroll', addNextPage); // window 이벤트는 이 컴포넌트가 언마운트 되어도 다른 컴포넌트에서 실행 될수 있어서 클린업 함수로 꺼줘야됨
    }
  }, []);

  // 다음 페이지 가져오기
  function addNextPage() {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치, Math.ceil로 감싼 이유는 브라우저 확대시 스크롤 가져올때 소수점으로 가져와서..
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex());
    }
  }

  // 상세페이지로 이동
  function redirectShow(item) {
    navigate(`/stays/${item.contentid}`);
  }

  return (
    <>
      <div className="stay-container">
        {
          StayList.map(item => {
            return (
              // 최상위 요소에 key값 꼭 넣어야 한다. 키값 '+' 이용해서 여러개 적어도 된다.
              <div className="stay-card" onClick={() => { redirectShow(item) }} key={item.contentid + item.createdtime}>
                <div className="stay-card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="stay-card-title">{item.title}</p>
                <p className="stay-card-tel">tel : {item.tel}</p>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default StayList;