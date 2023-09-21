import { LogoIcon } from './LogoIcon';
import { Search } from './Search';
import './header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <LogoIcon/>
      <Search/>
      <div className='menu-buttons' style={{ width: 300, height: 40 }}>

      </div>
    </div>
  );
}