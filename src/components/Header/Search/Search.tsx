import React, {useState, useEffect, useRef} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import './search.scss';
import { SearchIcon, CloseIcon } from '../../../icons';
import { useDebounce } from '../../../hooks';

interface SearchPlaceholderProps {
  onClick: any;
}

const SearchPlaceholder = ({ onClick }: SearchPlaceholderProps) => {
  return (
    <div className='search-placeholder' onClick={onClick}>
      <SearchIcon className='search-icon' />
      <h4 className='search-title'>Search</h4>
    </div>
  );
};

const updateSearchQueryParam = (queryValue: string) => {
  const currentParams = new URLSearchParams(location.search);

  if (queryValue) {
    currentParams.set('search', queryValue);
  } else {
    currentParams.delete('search');
  }

  return `?${currentParams.toString()}`;
};

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || '');
  const debouncedQuery = useDebounce(inputValue, 450);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (debouncedQuery) {
      navigate(updateSearchQueryParam(debouncedQuery));
    } else {
      const currentParams = new URLSearchParams(location.search);

      currentParams.delete('search');

      if (currentParams.toString()) {
        navigate(`?${currentParams.toString()}`);
      } else {
        navigate(`/`);
      }
    }
  }, [debouncedQuery, navigate, location.search]);

  useEffect(() => {
    if (searchTerm) {
      navigate(updateSearchQueryParam(searchTerm));
      if (!isSearchVisible) setIsSearchVisible(true);
    }
  }, [searchTerm, isSearchVisible, navigate, location.search]);

  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, isSearchVisible])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handlePlaceholderClick = () => {
    setIsSearchVisible(true);
  }

  if (!isSearchVisible) {
    return (
      <div className='search-wrapper'>
        <SearchPlaceholder onClick={handlePlaceholderClick} />
      </div>
    );
  }

  const onCloseIconClick = () => {
    setInputValue('');
  }

  return (
    <div className={`search-wrapper ${isSearchVisible ? 'open' : 'closed'}`} ref={searchRef}>
      <SearchIcon className='search-icon' />
      <input
        className='search-input'
        onChange={handleInputChange}
        placeholder='Search'
        value={inputValue}
        ref={inputRef}
        type='text'
      />

      {inputValue !== '' && <CloseIcon className='close-icon' onClick={onCloseIconClick}/> }
    </div>
  );
}