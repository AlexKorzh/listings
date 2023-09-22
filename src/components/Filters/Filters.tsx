import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import { options } from './constants.ts';
import { Option } from '../../types';

interface FiltersProps {
  propertyCount: number;
}

export const Filters = ({ propertyCount }: FiltersProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect(() => {
    if (filter) {
      const optionItem = options.find((option) => option.id === filter.toLowerCase());

      if (optionItem) setSelectedOption(optionItem);
    }
  }, [filter])

  const handleOptionChange = (option: Option) => {
    if (option.id === 'reset') {
      queryParams.delete('filter');
      setSelectedOption(null);
    } else {
      queryParams.set('filter', option.id);
    }

    navigate(`${location.pathname}?${queryParams.toString()}`);
  }

  return (
    <div className='filters'>
      <h3 className='title'>Homes for sale</h3>
      <p className='listing-count'>{propertyCount} listings found</p>
      <Dropdown
        onChange={handleOptionChange}
        value={selectedOption}
        options={options}
      />
    </div>
  );
}