import { LogoIcon } from './LogoIcon';
import { Search } from './Search';
import './header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <LogoIcon/>
      </div>
      <Search/>
    </div>
  );
}