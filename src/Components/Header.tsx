import React, { useState, useEffect } from "react";
import { Home, Monitor, Newspaper, HelpCircle, Menu, X } from 'lucide-react';
import logo from "../img/logo-vnpt-1.jpg";
import { NavLink } from "react-router-dom";

type NavItemProps = {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; to: string }[];
  isTopNav?: boolean;
  isMobile?: boolean;
  to?: string;
  onClick?: () => void;
};

function NavItem({ icon, label, hasDropdown = false, dropdownItems, isTopNav = false, isMobile = false, to, onClick }: NavItemProps) {
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (hasDropdown && isMobile) {
      e.preventDefault(); // Prevent navigation when toggling dropdown
      e.stopPropagation(); // Prevent onClick from closing the menu
      setIsDropdownOpen(!isDropdownOpen);
    } else if (isMobile && onClick) {
      onClick(); // Close the menu for non-dropdown items
    }
  };

  const handleDropdownItemClick = () => {
    if (isMobile && onClick) {
      onClick(); // Close the menu when a dropdown item is clicked
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
              `flex ${isMobile ? 'flex-row items-center justify-between py-3 px-4 text-base' : 'flex-col items-center px-1 sm:px-2 md:px-3 lg:px-4'} font-bold font-sans text-black hover:text-gray-700 ${isActive ? 'text-gray-700' : ''}`
            }
            onClick={handleClick}
          >
            {/* Icon beside the label in mobile, above in desktop */}
            {icon && (
              <span className={`text-black ${isMobile ? 'mr-3 w-6 h-6' : 'mb-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8'}`}>
                {icon}
              </span>
            )}
            <span className={`flex-1 ${isMobile ? 'text-base' : 'text-[10px] sm:text-xs md:text-sm lg:text-base text-center'}`}>
              {label}
            </span>
            {hasDropdown && isMobile && (
              <span className="ml-1 text-black">
                {isDropdownOpen ? '▲' : '▼'}
              </span>
            )}
          </NavLink>
          {hasDropdown && isDropdownOpen && dropdownItems && (
            <div
              className={`${isMobile ? 'w-full pl-8 bg-gray-50' : 'absolute top-full w-48 bg-white shadow-lg rounded-md py-2 z-10'} text-gray-600`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {dropdownItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-900 font-sans ${isMobile ? 'border-b border-gray-200' : ''} ${isActive ? 'text-blue-900 bg-gray-100' : ''}`
                  }
                  onClick={handleDropdownItemClick}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center hover:bg-blue-500 px-1 sm:px-2 md:px-3 py-1 sm:py-2 md:py-3 rounded transition text-[10px] sm:text-xs md:text-sm lg:text-base">
          {icon}
          <span className="mt-1 text-center">{label}</span>
        </div>
      )}
    </div>
  );
}

const HeaderBanner = () => {
  const dropdownItems = [
    { label: "Cáp Quang VNPT", to: "/internet" },
    { label: "Truyền hình Mytv", to: "/tv" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Info Line */}
      <div className="bg-white flex flex-col sm:flex-row items-center justify-between py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto relative">
        {/* Logo and Hamburger (Mobile) */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center">
            <img
              className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
              src={logo}
              alt="VNPT logo"
            />
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <NavItem
            label="TRANG CHỦ"
            icon={<Home />}
            isTopNav={true}
            isMobile={false}
            to="/"
          />
          <NavItem
            label="SẢN PHẨM DỊCH VỤ"
            icon={<Monitor />}
            hasDropdown={true}
            dropdownItems={dropdownItems}
            isTopNav={true}
            isMobile={false}
            to="/"
          />
          <NavItem
            label="TIN TỨC"
            icon={<Newspaper />}
            isTopNav={true}
            isMobile={false}
            to="/tin-tuc"
          />
          <NavItem
            label="VỀ VNPT"
            icon={<HelpCircle />}
            isTopNav={true}
            isMobile={false}
            to="/ve-vnpt"
          />
        </div>

        {/* Hotline (Desktop) */}
        <div className="hidden sm:flex items-center mt-2 sm:mt-0">
          <a
            href="https://zalo.me/0818122111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#1E73BE] text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold font-sans rounded-full px-3 sm:px-4 py-1 sm:py-2">
              HOTLINE: 0818.122.111
            </span>
          </a>
        </div>

        {/* Mobile Menu (Overlay) */}
        {isMenuOpen && (
          <div className="sm:hidden fixed inset-0 bg-white z-50 flex flex-col">
            {/* Mobile Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img
                className="w-20 h-auto"
                src={logo}
                alt="VNPT logo"
              />
              <button onClick={toggleMenu}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 flex flex-col pt-4">
              <NavItem
                label="TRANG CHỦ"
                icon={<Home />}
                isTopNav={true}
                isMobile={true}
                to="/"
                onClick={toggleMenu}
              />
              <NavItem
                label="SẢN PHẨM DỊCH VỤ"
                icon={<Monitor />}
                hasDropdown={true}
                dropdownItems={dropdownItems}
                isTopNav={true}
                isMobile={true}
                to="/"
                onClick={toggleMenu}
              />
              <NavItem
                label="TIN TỨC"
                icon={<Newspaper />}
                isTopNav={true}
                isMobile={true}
                to="/tin-tuc"
                onClick={toggleMenu}
              />
              <NavItem
                label="VỀ VNPT"
                icon={<HelpCircle />}
                isTopNav={true}
                isMobile={true}
                to="/ve-vnpt"
                onClick={toggleMenu}
              />
            </div>

            {/* Hotline (Mobile) */}
            <div className="p-4 border-t border-gray-200">
              <a
                href="https://zalo.me/0818122111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block bg-[#1E73BE] text-white text-base font-bold font-sans rounded-full px-4 py-2 text-center">
                  HOTLINE: 0818.122.111
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBanner;