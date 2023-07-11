
import React, { useEffect, useState } from "react";
import "./Style.css"
function Style({ map }) {
    const [styleNum, setNum] = useState(1);
    useEffect(() => {
        if (map?.current)
            switch (styleNum) {
                case 1: map.current.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
                    break;
                case 2: map.current.setStyle("mapbox://styles/mapbox/light-v11");
                    break;
                case 3: map.current.setStyle("mapbox://styles/mapbox/dark-v11");
                    break;
                case 4: map.current.setStyle("mapbox://styles/mapbox/streets-v12");
                    break;
                case 5: map.current.setStyle("mapbox://styles/mapbox/outdoors-v12");
                    break;
                default: break;
            }
    }, [styleNum])
    return <>
        <div className="radio-input">
            <label onClick={() => setNum(1)} className={styleNum === 1 && 'active'}>
                <input type="radio" id="value-1" name="value-radio" value="value-1" />
                <span>Satellite Streets</span>
            </label>
            <label onClick={() => setNum(2)}>
                <input type="radio" id="value-2" name="value-radio" value="value-2" />
                <span>Light</span>
            </label>
            <label onClick={() => { setNum(3); }}>
                <input type="radio" id="value-3" name="value-radio" value="value-3" />
                <span>Dark</span>
            </label>
            <label onClick={() => { setNum(4); }}>
                <input type="radio" id="value-3" name="value-radio" value="value-3" />
                <span>Streets</span>
            </label>
            <label onClick={() => { setNum(5); }}>
                <input type="radio" id="value-3" name="value-radio" value="value-3" />
                <span>Outdoors</span>
            </label>
            <span className="selection"></span>
        </div >
    </>
}

export default Style;
