import { useNavigate, useParams } from "react-router-dom";
import './StayDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStayInfo } from "../../store/slices/stayDetailSlice.js";

function StayDetail() {
  const params = useParams(); //세그먼트 파라미터(segment parameter) 사용할때 쓰는 훅...
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stayInfo = useSelector(state => state.stayDetail.stayInfo);
  const stayList = useSelector(state => state.stay.list);
  
  useEffect(() => {
    const item = stayList.find(item => params.id === item.contentid);
    dispatch(setStayInfo(item));
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      { stayInfo.title && 
      <div className="detail-container">
        <button type="button" onClick={redirectBack}>되돌아가기</button>
        <p className="detail-title">{stayInfo.title}</p>
        <p className="detail-tel">tel : {stayInfo.tel}</p>
        <img className="detail-img" src={stayInfo.firstimage} alt={`${stayInfo.title}사진`} />
        <p className="detail-addr">{`${stayInfo.addr1}, ${stayInfo.addr2}`}</p>
      </div>
      }
    </>
  )
}

export default StayDetail;