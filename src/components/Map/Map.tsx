import './map.scss';
import mapImage from '../../assets/map.png';

export const Map = () => {
  return (
    <div className='map'>
      <img src={mapImage} alt='map'/>
    </div>
  );
}