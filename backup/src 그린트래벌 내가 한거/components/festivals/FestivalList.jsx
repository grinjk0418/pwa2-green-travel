import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';

function FestivalList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(festivalIndex());
  }, []);

  const list = useSelector(state => state.festival.list);

return (
    <div className="container">
      {list && list.map(item => (
        <div className="card" key={item.contentid}>

          <div className="card-img"
            style={{
              backgroundImage: `url(${item.firstimage})`,
            }}>
          </div>

          <p className="card-title">{item.title}</p>
          <p className="card-period">
            {item.eventstartdate.slice(2, 4)}-{item.eventstartdate.slice(4, 6)}-{item.eventstartdate.slice(6)} ~
            {item.eventenddate.slice(2, 4)}-{item.eventenddate.slice(4, 6)}-{item.eventenddate.slice(6)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FestivalList;