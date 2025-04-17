import React, { useState, useEffect } from "react";
import { Home, Monitor, Leaf, Newspaper, HelpCircle, Mail, Search, Menu } from 'lucide-react';
import logo from "../img/logo-vnpt-1.jpg";
import ProductList from "./product";
import home from "../img/home.png";
import zalo from "../img/Icon_of_Zalo.svg.png";
import { NavLink } from "react-router-dom"; // Use react-router-dom for NavLink

type NavItemProps = {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; to: string }[];
  isTopNav?: boolean;
  isMobile?: boolean;
  to?: string;
};

function NavItem({ icon, label, hasDropdown = false, dropdownItems, isTopNav = false, isMobile = false, to }: NavItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hasDropdown && !isMobile) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasDropdown && !isMobile) {
      const id = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
      setTimeoutId(id);
    }
  };

  const handleClick = () => {
    if (hasDropdown && isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div
      className={`relative ${isMobile ? 'w-full' : 'flex items-center'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTopNav ? (
        <div className="flex flex-col w-full">
          <NavLink
            to={to || "#"}
            className={({ isActive }) =>
              `text-black hover:text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg ${isMobile ? 'py-2 px-4' : 'px-2 sm:px-3 md:px-4'} flex items-center justify-between font-bold font-sans ${isActive ? 'text-gray-700' : ''}`
            }
            onClick={handleClick}
          >
            {label}
            {hasDropdown && (
              <span className={`ml-1 text-black ${isMobile ? 'inline' : ''}`}>
                {isDropdownOpen && isMobile ? '▲' : '⇣'}
              </span>
            )}
          </NavLink>
          {hasDropdown && isDropdownOpen && dropdownItems && (
            <div
              className={`${isMobile ? 'w-full pl-6' : 'absolute top-full w-48'} bg-white text-gray-600 shadow-lg rounded-md py-2 z-10`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {dropdownItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-xs sm:text-sm md:text-base hover:bg-gray-100 hover:text-blue-900 font-sans ${isMobile ? 'border-b border-gray-200' : ''} ${isActive ? 'text-blue-900 bg-gray-100' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center hover:bg-blue-500 px-1 sm:px-2 md:px-3 py-1 sm:py-2 md:py-3 rounded transition text-xs sm:text-sm md:text-base lg:text-lg">
          {icon}
          <span className="mt-1 text-center">{label}</span>
        </div>
      )}
    </div>
  );
}

const HeaderBanner = () => {
  const dropdownItems = [
    { label: "Cá nhân", to: "/ca-nhan" },
    { label: "Doanh nghiệp", to: "/doanh-nghiep" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Info Line */}
      <div className="bg-white w-3/4 flex flex-col sm:flex-row items-center justify-between py-1 sm:py-2 md:py-3 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
        {/* Logo and Hamburger (Mobile) */}
        <div className="py-[10px] flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center">
            <img
              className="w-19 sm:w-19 md:w-20 lg:w-26 xl:w-32 h-auto"
              src={logo}
              alt="VNPT logo"
            />
          </div>
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop) / Mobile Menu */}
        <div className={`sm:flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-12 ${isMenuOpen ? 'flex flex-col w-full' : 'hidden'} sm:flex-row`}>
          <NavItem label="TRANG CHỦ" isTopNav={true} isMobile={isMenuOpen} to="/" />
          <NavItem
            label="SẢN PHẨM DỊCH VỤ"
            hasDropdown={true}
            dropdownItems={dropdownItems}
            isTopNav={true}
            isMobile={isMenuOpen}
            to="/san-pham"
          />
          <NavItem label="TIN TỨC" isTopNav={true} isMobile={isMenuOpen} to="/tin-tuc" />
          <NavItem label="LIÊN HỆ" isTopNav={true} isMobile={isMenuOpen} to="/lien-he" />
          <NavItem label="VỀ VNPT" isTopNav={true} isMobile={isMenuOpen} to="/ve-vnpt" />
        </div>

        {/* Hotline (Always Visible) */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-0">
          <a
            href="https://zalo.me/0818122111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#1E73BE] text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold font-sans rounded-full px-3 sm:px-4 py-2">
              HOTLINE: 0818.122.111
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;