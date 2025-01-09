// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router';
// import { useTheme } from '../assets/js/ThemeContext';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState('');
//   const [isMobile, setIsMobile] = useState(false);
//   const { toggleTheme } = useTheme();

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);

//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setActiveDropdown('');
//   };

//   const toggleDropdown = (dropdownName, e) => {
//     e.preventDefault();
//     if (isMobile) {
//       setActiveDropdown(activeDropdown === dropdownName ? '' : dropdownName);
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         :root {
//           --header-bg-color: #010314;
//           --link-color: rgba(255, 255, 255, 0.5);
//           --link-hover-color: rgba(255, 255, 255, 1);
//           --link-active-color: rgba(255, 255, 255, 1);
//           --nav-bg-color: #010314;
//           --dropdown-bg: #ffffff;
//           --dropdown-text: #010314;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .section.header {
//           padding: 20px 40px;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           // justify-content: space-between;
//           background:black;
//           position: fixed;
//           z-index: 1000;
//         }

//         .header__logo {
//           width: 180px;
//           flex-shrink: 0;
//         }

//         .logo.primary {
//           width: 100%;
//           height: 35px;
//           display: block;
//           background: url(https://media.licdn.com/dms/image/v2/D5603AQGPc2kA1lCqAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721909092388?e=2147483647&v=beta&t=vbliqviRwVKzrDvhuYmwj9DZXcqRabsg85vzUxOSQkM) no-repeat 50% 50% / contain;
//         }

//         .nav {
//           margin-left: auto;
//           display: flex;
//           align-items: center;
//         }

//         .nav__list {
//           display: flex;
//           align-items: center;
//           list-style: none;
//           gap: 10px;
//         }

//         .nav__item {
//           position: relative;
//         }

//         .nav__link {
//           padding: 12px 16px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           color: var(--link-color);
//           text-decoration: none;
//           font-size: 16px;
//           white-space: nowrap;
//           transition: all 0.3s ease;
//         }

//         .nav__link:hover {
//           color: var(--link-hover-color);
//         }

//         .nav__item.active .nav__link {
//           color: var(--link-active-color);
//         }

//         .dropdown {
//           position: relative;
//         }

//         .dropdown__trigger {
//           padding-right: 28px;
//           position: relative;
//         }

//         .dropdown__trigger::after {
//           content: '';
//           position: absolute;
//           right: 12px;
//           top: 50%;
//           width: 8px;
//           height: 8px;
//           border-right: 2px solid var(--link-color);
//           border-bottom: 2px solid var(--link-color);
//           transform: translateY(-50%) rotate(45deg);
//           transition: transform 0.3s ease;
//         }

//         .dropdown__menu {
//           position: absolute;
//           top: 100%;
//           left: 50%;
//           transform: translateX(-50%) translateY(10px);
//           min-width: 220px;
//           background-color: var(--dropdown-bg);
//           border-radius: 8px;
//           padding: 8px 0;
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         }

//         .dropdown__menu .nav__link {
//           color: var(--dropdown-text);
//           padding: 10px 20px;
//           justify-content: flex-start;
//         }

//         .dropdown__menu .nav__link:hover {
//           background-color: rgba(0, 0, 0, 0.05);
//         }

//         .btn-menu {
//           display: none;
//           width: 44px;
//           height: 44px;
//           padding: 10px;
//           align-items: center;
//           justify-content: center;
//           border: none;
//           background: transparent;
//           cursor: pointer;
//           z-index: 1001;
//         }

//         .btn-menu svg {
//           width: 24px;
//           height: 24px;
//           stroke: var(--link-color);
//           stroke-width: 2px;
//           stroke-linecap: round;
//           transition: all 0.3s ease;
//         }

//         @media (min-width: 769px) {
//           .dropdown:hover .dropdown__menu {
//             opacity: 1;
//             visibility: visible;
//             transform: translateX(-50%) translateY(0);
//           }

//           .dropdown:hover .dropdown__trigger::after {
//             transform: translateY(-50%) rotate(-135deg);
//           }
//         }

//         @media screen and (max-width: 768px) {
//           .section.header {
//             padding: 15px 20px;
//           }

//           .btn-menu {
//             display: flex;
//             margin-left: 20px;
//           }

//           .nav {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100vh;
//             background-color: var(--header-bg-color);
//             padding: 80px 20px 40px;
//             transform: translateX(${isMenuOpen ? '0' : '100%'});
//             transition: transform 0.3s ease;
//             z-index: 1000;
//           }

//           .nav__list {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 0;
//             width: 100%;
//           }

//           .nav__item {
//             width: 100%;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .nav__link {
//             width: 100%;
//             padding: 15px;
//             font-size: 18px;
//           }

//           .dropdown__menu {
//             position: static;
//             width: 100%;
//             transform: none;
//             background-color: rgba(255, 255, 255, 0.05);
//             box-shadow: none;
//             border-radius: 0;
//             margin: 0;
//             padding: 0;
//             max-height: 0;
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//           }

//           .dropdown__menu.active {
//             max-height: 400px;
//             opacity: 1;
//             visibility: visible;
//             padding: 8px 0;
//           }

//           .dropdown__menu .nav__link {
//             color: var(--link-color);
//             padding: 12px 25px;
//             font-size: 16px;
//           }

//           .dropdown__trigger::after {
//             right: 20px;
//             transform: translateY(-50%) rotate(${activeDropdown ? '-135deg' : '45deg'});
//           }
//         }

//         @media screen and (max-width: 480px) {
//           .section.header {
//             padding: 12px 15px;
//           }

//           .header__logo {
//             width: 150px;
//           }

//           .nav {
//             padding: 70px 15px 30px;
//           }

//           .nav__link {
//             padding: 12px;
//             font-size: 16px;
//           }
//         }

//         .switch {
//           position: relative;
//           display: inline-block;
//           width: 60px;
//           height: 34px;
//         }

//         .switch input {
//           opacity: 0;
//           width: 0;
//           height: 0;
//         }

//         .slider {
//           position: absolute;
//           cursor: pointer;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: #ccc;
//           transition: 0.4s;
//           border-radius: 34px;
//         }

//         .slider:before {
//           position: absolute;
//           content: "";
//           height: 26px;
//           width: 26px;
//           left: 4px;
//           bottom: 4px;
//           background-color: white;
//           transition: 0.4s;
//           border-radius: 50%;
//         }

//         input:checked + .slider {
//           background-color: #007BFF; /* Change background color when checked */
//         }

//         input:checked + .slider:before {
//           transform: translateX(26px); /* Move the toggle when checked */
//         }
//       `}</style>

//       <header className="section header">
//         <a href="/" className="header__logo">
//           <span className="logo primary"></span>
//         </a>
//         <nav className="nav">
//           <ul className="nav__list">
//           <Link to={"/"}>
//             <li className="nav__item active">
//               <a href="#" className="nav__link">Home</a>
//             </li>
//             </Link>
//          <Link to={"/about"}>
//             <li className="nav__item">
//               <a href="#" className="nav__link">About</a>
//             </li>
//             </Link>
//             <li className="nav__item dropdown">
//               <a 
//                 href="#" 
//                 className="nav__link dropdown__trigger"
//                 onClick={(e) => toggleDropdown('digital', e)}
//               >
//                 Digital
//               </a>
//               <ul className={`dropdown__menu ${activeDropdown === 'digital' ? 'active' : ''}`}>
//                 <li><a href="#" className="nav__link">Digital Marketing</a></li>
//                 <li><a href="#" className="nav__link">Social Media</a></li>
//                 <li><a href="#" className="nav__link">Content Strategy</a></li>
//                 <li><a href="#" className="nav__link">SEO Services</a></li>
//               </ul>
//             </li>
//             <li className="nav__item dropdown">
//               <a 
//                 href="#" 
//                 className="nav__link dropdown__trigger"
//                 onClick={(e) => toggleDropdown('development', e)}
//               >
//                 Development
//               </a>
//               <ul className={`dropdown__menu ${activeDropdown === 'development' ? 'active' : ''}`}>
//                 <li><a href="#" className="nav__link">Web Development</a></li>
//                 <li><a href="#" className="nav__link">Mobile Apps</a></li>
//                 <li><a href="#" className="nav__link">Custom Software</a></li>
//                 <li><a href="#" className="nav__link">API Integration</a></li>
//               </ul>
//             </li>
//             <li className="nav__item">
//               <a href="#" className="nav__link">Our Work</a>
//             </li>
//             <li className="nav__item">
//               <a href="#" className="nav__link">Contact</a>
//             </li>
//           </ul>
//         </nav>
//         <button 
//           className="btn-menu"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg viewBox="0 0 24 24" fill="none">
//             <path 
//               d={isMenuOpen 
//                 ? "M6 18L18 6M6 6l12 12" 
//                 : "M4 6h16M4 12h16M4 18h16"
//               } 
//             />
//           </svg>
//         </button>
//         {/* <label className="switch">
//           <input 
//             type="checkbox" 
//             id="theme-toggle" 
//             onClick={toggleTheme} 
//             aria-label="Toggle theme" 
//           />
//           <span className="slider"></span>
//         </label> */}
//       </header>
//     </>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLinks = [
    {
      title: 'About',
      dropdownItems: [
        { title: 'Company', href: '/about' },
        { title: 'Other Company', href: '/other-company' }
      ]
    },
    {
      title: 'Digital',
      dropdownItems: [
        { title: 'Digital Marketing', href: '/digital-marketing' },
        { title: 'SEO Services', href: '/seo-services' }
      ]
    },
    {
      title: 'Development',
      dropdownItems: [
        { title: 'Web Development', href: '/web-development' },
        { title: 'App Development', href: '/app-development' }
      ]
    }
  ];

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <nav className="custom-container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 4L20 8.5L12 13L4 8.5L12 4Z" />
                <path d="M20 15.5L12 20L4 15.5" />
                <path d="M20 12L12 16.5L4 12" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 text-transparent bg-clip-text">
              YourLogo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-decoration-none" 
            >
              Home
            </a>
            
            {navLinks.map((link) => (
              <div key={link.title} className="relative">
                <button
                  onClick={() => handleDropdown(link.title)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
                >
                  <span>{link.title}</span>
                  <ChevronDown 
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      activeDropdown === link.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg py-1 border border-gray-100
                    transform transition-all duration-200 origin-top-left text-decoration-none
                    ${activeDropdown === link.title 
                      ? 'scale-100 opacity-100' 
                      : 'scale-95 opacity-0 pointer-events-none'
                    }
                  `}
                >
                  {link.dropdownItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a 
              href="/our-works" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
            >
              Our Works
            </a>

            <a
              href="/contact"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 text-decoration-none"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200 text-decoration-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 text-decoration-none
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-2 space-y-1">
            <a
              href="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200 text-decoration-none font-weight-600"
            >
              Home
            </a>
            
            {navLinks.map((link) => (
              <div key={link.title}>
                <button
                  onClick={() => handleDropdown(`${link.title}-mobile`)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
                >
                  <span>{link.title}</span>
                  <ChevronDown 
                    size={16}
                    className={`transform transition-transform duration-200 text-decoration-none ${
                      activeDropdown === `${link.title}-mobile` ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`
                    overflow-hidden transition-all duration-200 bg-gray-50 text-decoration-none
                    ${activeDropdown === `${link.title}-mobile` ? 'max-h-48' : 'max-h-0'}
                  `}
                >
                  {link.dropdownItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block px-8 py-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="/our-works"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200 text-decoration-none"
            >
              Our Works
            </a>

            <a
              href="/contact"
              className="block mx-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 text-center transition-colors duration-200 text-decoration-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
