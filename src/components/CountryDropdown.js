import React, { useState } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from '@headlessui/react';
const CountryDropdown = () => {
    const countries =['Country1', 'country2', 'country3'];
    const [selectedCountry, setSelectedCountry] =useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    return <Menu as='div' className="dropdown">
        <Menu.Button onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn-w-full">
            <RiMapPinLine 
            className="dropdown-icon-primary" />
            <div>
                <div>{selectedCountry}</div>
                <div>Select your place</div>
                {isOpen ?(
                    <RiArrowUpSLine
                    className="dropdown-icon-primary" />
                ):
                (
                    <RiArrowDownSLine 
                    className='dropdown-icon-primary'/>
                )}
            </div>
        </Menu.Button>
        
        {isOpen && ( // Show the dropdown menu only if isOpen is true
        <Menu.Items className="dropdown-menu">
          {countries.map((country, index) => (
            <Menu.Item
              onClick={() => setSelectedCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          ))}
        </Menu.Items>
      )}
        </Menu>;
};
export default CountryDropdown;