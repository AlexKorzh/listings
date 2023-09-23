import { ListIcon, MapIcon } from '../../icons';
import { View } from '../../types';
import './view-swithcer.scss';

interface ViewSwitcherProps {
  onChange: (view: View) => void;
  view: View;
}

export const ViewSwitcher = ({ view = View.map, onChange }: ViewSwitcherProps) => {
  const handleClick = () => {
    if (view === View.map) onChange(View.list);
    if (view === View.list) onChange(View.map);
  }

  return (
    <div className='view-switcher' onClick={handleClick}>
      <span className='view-switcher__icon'>
        {view === 'map' ? <MapIcon/>: <ListIcon/>}
      </span>
      <span className='view-switcher__text'>
        {view === 'map' ? 'Map' : 'List'}
      </span>
    </div>
  );
}