import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router";
import logo from "../img/FPT_Telecom_logo.svg";
const Header = () => {

  const [user, setUser] = useState<{
    info: { role: string; name: string; email: string; id: string };
    id: string;
  } | null>(null);
  const [profileData, setProfileData] = useState({
    img: "",
  });
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const navigate = useNavigate();



  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
  
      fetchUserProfile(parsedUser.id);
    }
  
   
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  

  const fetchUserProfile = async (id: string) => {
    try {
      const response = await axios.get(`https://fptbe.onrender.com/user/${id}`);
      if (response.data) {
        const formattedDob = response.data.dob
          ? new Date(response.data.dob).toISOString().split("T")[0]
          : "";
        setProfileData({
          img: response.data.img || ""
          
        });
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };
  
  return (
    <header className="w-full bg-white shadow-md">
    {/* Top Nav */}
    <div className="bg-blue-900 text-white text-sm flex justify-center py-2">
      <span className="border-b border-white pb-1">Khách hàng cá nhân</span>
    </div>

    {/* Main Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="FPT Telecom" className="h-10" />
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <div className="cursor-pointer">Sản phẩm dịch vụ</div>
        <div className="cursor-pointer">
          <Link to={"https://zalo.me/0868904028"}>Liên hệ hỗ trợ</Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Right Icons */}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <div className="relative">
            <div
              className="flex items-center cursor-pointer border-2 border-black rounded-xl px-3 py-2"
              onClick={toggleSubMenu}
            >
              <p className="ml-2 flex gap-2">{user.info.name}</p>
            </div>
            {isSubMenuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                {(user.info.role === "admin" || user.info.role === "shipper") && (
                  <li className="hover:bg-gray-100">
                    <Link
                      to={user.info.role === "admin" ? "/admin/dashboard" : "/shipper"}
                      className="block px-4 py-2"
                      onClick={() => setIsSubMenuOpen(false)}
                    >
                      Quản trị
                    </Link>
                  </li>
                )}
                <li className="hover:bg-gray-100">
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsSubMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2"
                  >
                    Đăng xuất
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to={"/login"} className="text-gray-700">Đăng nhập</Link>
            <Link to={"/register"} className="text-gray-700">Đăng ký</Link>
          </div>
        )}
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-white shadow-md px-6 py-4">
        <nav className="flex flex-col space-y-4 text-gray-700">
          <div className="cursor-pointer">Sản phẩm dịch vụ</div>
          <div className="cursor-pointer">
            <Link to={"https://zalo.me/0868904028"}>Liên hệ hỗ trợ</Link>
          </div>
          {user ? (
            <>
              <div className="border-t pt-4">
                <p className="font-semibold">{user.info.name}</p>
                {(user.info.role === "admin" || user.info.role === "shipper") && (
                  <Link
                    to={user.info.role === "admin" ? "/admin/dashboard" : "/shipper"}
                    className="block text-gray-700 mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quản trị
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block text-red-500 mt-2"
                >
                  Đăng xuất
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to={"/login"} className="text-gray-700">Đăng nhập</Link>
              <Link to={"/register"} className="text-gray-700">Đăng ký</Link>
            </div>
          )}
        </nav>
      </div>
    )}
  </header>
  );
};

export default Header;
