import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <Navbar />
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Layout;