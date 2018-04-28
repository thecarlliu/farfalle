import React from "react";
import "./Home.css";
import ImageGrid1 from "../../components/ImageGrid1";
import ImageGrid2 from "../../components/ImageGrid2";
import ImageGrid3 from "../../components/ImageGrid3";
import About from "../../components/About";
import Form from "../../components/Form";
import Endorsements from "../../components/Endorsements";


const images = require("../../images.json");

const Home = () => (
    <div className="grid-x medium-12">
        <ImageGrid1 />
        <ImageGrid2 />
        <ImageGrid3 />
        <About />
        <Form />
        <Endorsements />
    </div>
);

export default Home;