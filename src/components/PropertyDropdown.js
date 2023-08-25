'use client'
import React, { useState } from 'react';
import { RiHome3Line, RiArrowDownSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';

const PropertyDropdown = () => {
  const properties = [,'Property 1', 'Property 2', 'Property 3']; // Hardcoded property list
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn w-full left-text">
        <RiHome3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {selectedProperty}
          </div>
          <div>Select your place</div>
          <RiArrowDownSLine className="dropdown-icon-primary" />
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => (
          <Menu.Item
            onClick={() => setSelectedProperty(property)}
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
          >
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
