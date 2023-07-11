import React, { useEffect, useState } from "react";
import "./Zoom.css"
function Zoom({ map }) {
    const [zoom, setZoom] = useState(10);
    useEffect(() => {
        if (map?.current) map.current.setZoom(zoom);

    }, [zoom])
    return <div className="slidecontainer">
        <input type="range" min="1" max="20" value={zoom} onChange={(e) => setZoom(e.target.value)} className="slider" id="myRange" />


    </div>

}
export default Zoom;

