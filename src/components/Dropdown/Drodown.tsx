import { useState, useRef, useEffect } from 'react';
import { Option } from '../../types';
import './dropdown.scss';

interface DropdownProps {
  value: Option | null;
  onChange: (option: Option) => void;
  options: Option[]
}

export const Dropdown = ({ options, onChange, value }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {value?.value || 'Select an option'}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option, index) => (
            <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
