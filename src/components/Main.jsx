import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => { navigate('/festivals') }}>축제 정보</button>
      <br />
      <button type="button" onClick={() => { navigate('/stays') }}>숙박 정보</button>
      <img className='title-Img' onClick={() => { navigate('/festivals') }} src='/base/andong_tal.png' alt="대문" />

    </>
  )
}

export default Main;