import React from "react";
import "./ImageGrid1.css";

const ImageGrid1 = (props) => (
    <div className="image-grid1 cell medium-12">
        <img src={props.src} alt={props.name}/>
    </div>
);

export default ImageGrid1;