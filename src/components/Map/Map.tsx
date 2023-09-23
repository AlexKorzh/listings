import './map.scss';
import mapImage from './map.png';

export const Map = () => {
  return (
    <div className='map'>
      <img src={mapImage} alt='map'/>
    </div>
  );
}