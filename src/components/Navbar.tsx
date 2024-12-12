import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Dashboard</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;