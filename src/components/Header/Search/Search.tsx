import { SearchIcon } from '../../../icons';
import './search.scss';
import {useState} from "react";

interface SearchPlaceholderProps {
  onClick: any;
}

const SearchPlaceholder = ({ onClick } : SearchPlaceholderProps) => {
  return (
    <div className='search-placeholder' onClick={onClick}>
      <SearchIcon className='search-icon' />
      <h4 className='search-title'>Search</h4>
    </div>
  );
};

export const Search = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handlePlaceholderClick = () => {
    setIsSearchVisible(true);
  }

  if (!isSearchVisible) {
    return (
      <div className='search-wrapper'>
        <SearchPlaceholder onClick={handlePlaceholderClick}/>
      </div>
    );
  }

  return (
    <div className='search-wrapper'>
      <SearchIcon className='search-icon' />
      <input className='search-input'  type='text' placeholder='Search'/>
    </div>
  );
}