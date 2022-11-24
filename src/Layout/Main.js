import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Outstanding from '../Pages/Shared/Outstanding/Outstanding';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Outstanding></Outstanding>
          <Footer></Footer>
        </div>
    );
};

export default Main;