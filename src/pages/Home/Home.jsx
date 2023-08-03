/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import BlogList from "../../components/Blog List/Blogs";
import Footer from "../../components/Footer/Footer";

function Home(){
    return (
        <>
            <Navbar/>
            <Header/>
            <Cards/>
            <BlogList/>
            <Footer/>
        </>
    );
}

export default Home;
