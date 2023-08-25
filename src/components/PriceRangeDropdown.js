'use client'
import React, { useState } from 'react';
import { RiWalletLine, RiArrowDownSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';

const PriceRangeDropdown = () => {
  const priceRanges = ['Price range (any)','$0 - $500', '$501 - $1000', '$1001 - $1500']; // Hardcoded price range list
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn w-full left-text">
        <RiWalletLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {selectedPriceRange}
          </div>
          <div>Select a price range</div>
          <RiArrowDownSLine className="dropdown-icon-primary" />
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {priceRanges.map((priceRange, index) => (
          <Menu.Item
            onClick={() => setSelectedPriceRange(priceRange)}
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
          >
            {priceRange}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
