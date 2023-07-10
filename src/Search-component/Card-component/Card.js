import React from "react";
import pic from "../../location.png"
import "./Card.css"
function Card({ obj, map }) {
    function onClickHandler() {
        map.current.flyTo({ center: obj.center, zoom: 9 });
    }

    return <div className="cardMain" onClick={onClickHandler}>
        <div className="imgCon">
            <img src={pic} width={40} />
        </div>
        <div>
            <h3>{obj.text}</h3>
            <p>{obj.place_name}</p>

        </div>
    </div>
}

export default Card;
