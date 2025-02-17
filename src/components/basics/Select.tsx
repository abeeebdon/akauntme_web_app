import React, { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    onSelect: (value: string) => void;
    placeholder?: string;
}

const Select: React.FC<DropdownProps> = ({ options, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onSelect(option.value);
        setIsOpen(false);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block w-10" ref={dropdownRef}>


            <button
                onClick={toggleDropdown}

                className='outset-none bg-akauntme justify-around rounded-md py-0.5 px-1 mx-1 w-14 flex items-center gap-x-1'>
                <span className='text-[10px] text-white'>
                    {selectedOption ? selectedOption.label : placeholder || 'Select an option'}

                </span>
                <span>
                    <svg className='size-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                        <path d="M6.414063 7.585938L3.585938 10.414063L13 19.828125L22.414063 10.414063L19.585938 7.585938L13 14.171875Z" fill="#ECE8E8" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-[100px] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer select-none relative py-1.5 pl-3 pr-9 hover:bg-akauntme hover:text-white"
                        >
                            <span className="block truncate text-xs">{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
