import React, { useContext, useState } from "react";
import {
  RiHome5Line,
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select Your Place</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, i) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text=violet-700 transition"
              as="li"
              key={i}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
