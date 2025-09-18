import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { setScrollEventFlg } from '../../store/slices/festivalSlice.js';
import { useNavigate } from 'react-router-dom';
// import { setFestivalInfo } from '../../store/slices/festivalShowSilce.js';

function FestivalList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const festivalList = useSelector(state => state.festival.list)
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);
  
  useEffect(() => {

    window.addEventListener('scroll', addNextPage);

    if(festivalList.length === 0) {
      dispatch(festivalIndex());
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
      dispatch(festivalIndex());
    }
  }

  // 상세페이지로 이동
  function redirectShow(item) {
    // dispatch(setFestivalInfo(item));
    navigate(`/festivals/${item.contentid}`);
  }

  return (
    <>
      <div className="container">
        {
          // festivalList && festivalList.map(item => {
          festivalList.map(item => {
            return (
              // 최상위 요소에 key값 꼭 넣어야 한다. 키값 '+' 이용해서 여러개 적어도 된다.
              <div className="card" onClick={() => { redirectShow(item) }} key={item.contentid + item.createdtime}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="card-title">{item.title}</p>
                <p className="card-period">{dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}</p>
              </div>
            );
          })
        }
      </div>
      {/* <button type="button" onClick={addNextPage}>더 보기</button> */}
    </>
  )
}

export default FestivalList;