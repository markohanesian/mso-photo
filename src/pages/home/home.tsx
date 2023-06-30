import React from 'react';
import NavBar from "../../components/nav/NavBar";
import MasonryImageList from "../../components/imageList/ImageList"
import Hero from "../../components/hero/Hero";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <MasonryImageList />
         </>
    );
};