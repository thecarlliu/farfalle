import React from "react";
import "./ImageGrid2.css";

const ImageGrid2 = (props) => (
    <div className="image-grid2 grid medium-12">
        {
            props.images.map((image) => (
                <div className="cell medium-4">
                    <img src={image.src} alt={image.name}/>
                </div>
            ))
        }
    </div>
);

export default ImageGrid2;