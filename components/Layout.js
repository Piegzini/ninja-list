import React from 'react';
import PropTypes from 'prop-types';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            { children }
            <Footer/>
        </div>
    );
};

Layout.propTypes = {

};

export default Layout;
