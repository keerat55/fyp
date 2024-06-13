import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Admin from './Navigation/Admin';
import Leader from './Navigation/Leader';
import Employee from './Navigation/Employee';
import { slide as Menu } from 'react-burger-menu';

const SideBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-sidebar">
      {isMobile ? (
        <Menu disableAutoFocus>
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <NavLink to="/home">Target Management</NavLink>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
              <NavLink to="/home">TM</NavLink>
            </div>
            {user.type === 'Admin' ? <Admin /> : user.type === 'Leader' ? <Leader /> : <Employee />}
            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
              <a
                href="https://devdeepak.vercel.app/"
                target="_blank"
                className="btn btn-primary btn-lg btn-block btn-icon-split"
              >
                <i className="fas fa-rocket"></i> Deepak Singh
              </a>
            </div>
          </aside>
        </Menu>
      ) : (
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <NavLink to="/home">Target Management</NavLink>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <NavLink to="/home">TM</NavLink>
          </div>
          {user.type === 'Admin' ? <Admin /> : user.type === 'Leader' ? <Leader /> : <Employee />}
          
        </aside>
      )}
    </div>
  );
};

export default SideBar;
