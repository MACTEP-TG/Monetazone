import {FC, useState, useRef, useEffect} from "react";
import './select.scss'
import arrowRight from '@/assets/svgs/arrow-right.svg';
import arrowBottom from '@/assets/svgs/arrow-bottom.svg';


type SelectType = {
    label: string
    placeholder: string
    options: string []
    setOption: any
}

export const Select: FC<SelectType> = ({ options, placeholder = "Select an option" , label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='select'>
            <div className="label">{label}</div>
            <div className="body" ref={dropdownRef}>
                <div className="top" onClick={toggleDropdown}>
                    {selectedOption ? selectedOption : placeholder}
                    {isOpen ?
                        <img src={arrowBottom} alt="arrow"/>
                        :
                        <img src={arrowRight} alt=""/>
                    }

                </div>
                {isOpen && (
                    <ul className="list">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`dropdown-item ${option === selectedOption ? "selected" : ""}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    );
};
