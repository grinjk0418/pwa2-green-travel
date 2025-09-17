import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatter.js";
import { useEffect } from "react";
import { setFestivalInfo } from "../../store/slices/festivalShowSilce";

function FestivalShow() {
  const params = useParams(); //세그먼트 파라미터(segment parameter) 사용할때 쓰는 훅...
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list);
  
  // console.log(festivalList, params.id, item);
  
  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid);
    dispatch(setFestivalInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      { festivalInfo.title && 
      //  <h1 style={{color: '#fff'}}>쇼 {params.id}</h1> 
      <div className="show-container">
        <button type="button" onClick={redirectBack}>되돌아가기</button>
        <p className="show-title">{festivalInfo.title}</p>
        <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
        <img className="show-img" src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} />
        <p className="show-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
      </div>
      }
    </>
  )
}

export default FestivalShow;