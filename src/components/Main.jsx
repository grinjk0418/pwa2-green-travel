import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <img className='title-Img' onClick={() => { navigate('/festivals') }} src='/base/andong_tal.png' alt="대문" />
    </>
  )
}

export default Main;