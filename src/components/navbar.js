import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './navbar.css';
import { IconButton, Drawer, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track if it's mobile
  const [menuOpen, setMenuOpen] = useState(false); // Manage drawer state
  const navigate = useNavigate(); // For navigation
  const [show, setShow] = useState(true); // Scroll hide effect
  const [lastScrollY, setLastScrollY] = useState(0); // For scroll tracking

  // Handle screen resize events for mobile/desktop switching
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = (open) => {
    setMenuOpen(open);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the drawer when a link is clicked
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Skills', path: '/skills' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar ${!show ? 'navbar-hidden' : ''}`}>
        {/* Logo */}
        <div className="navbar-logo">
          Fayaz
        </div>

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Navbar Links for Desktop */}
        {!isMobile && (
          <ul className="navbar-links">
            {menuItems.map(item => (
              <li key={item.text}>
                <NavLink to={item.path} onClick={() => handleLinkClick(item.path)}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#000', // Set the background color to black
            color: '#121212', // Text color for items inside the drawer
          }
        }}
      >
        <Box sx={{ width: 160 }} role="presentation" onClick={() => toggleDrawer(false)}>
          {menuItems.map(item => (
            <Button
              key={item.text}
              sx={{
                color: 'white', // Set text color to white
                width: '100%',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
                padding: '30px',
                fontSize: '15px',
                fontFamily:'revert'
                
              }}
              onClick={() => handleLinkClick(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
