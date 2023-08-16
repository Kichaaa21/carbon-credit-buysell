import React from 'react'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import Page1 from "../../Components/Page1/Page1";
import Page2 from "../../Components/Page2/Page2";
import Page3 from "../../Components/Page3/Page3";
import Page4 from "../../Components/Page4/Page4";
import Page5 from "../../Components/Page5/Page5";
import Page6 from "../../Components/Page6/Page6";
import Page7 from "../../Components/Page7/Page7";
import Page8 from "../../Components/Page8/Page8";


export default function Home() {
  return (
    <div>
        <Navbar />
        <Page1 />
        <Page3 />
        <Page2 />
        <Page5 />
        <Page7 />
        <Page6 />
        <Page4 />
        <Page8 />
        <Footer />
    </div>
  )
}
