import { LogoIcon } from './LogoIcon';
import { Search } from './Search';
import './header.scss';

interface HeaderProps {
  isSearchHidden?: boolean;
}

export const Header = ({ isSearchHidden = false }: HeaderProps) => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <LogoIcon/>
      </div>
      { !isSearchHidden && <Search/> }
    </div>
  );
}