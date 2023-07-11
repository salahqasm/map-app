import React from "react";
import pic from "../../location.png"
import "./Card.css"
function Card({ obj, map, refresh, setRefresh }) {
    function onClickHandler() {
        map.current.flyTo({ center: obj.center, zoom: 9 });
        let his = JSON.parse(localStorage.getItem('history'));
        let newVisit = {
            name: obj.place_name,
            center: obj.center
        };

        his.unshift(newVisit)
        if (his.length > 10) {
            his = his.slice(0, 11);
        }

        localStorage.setItem('history', JSON.stringify(his));
        setRefresh(prev => prev + 1);
    }

    return <div className="cardMain" onClick={onClickHandler}>
        <div className="imgCon">
            <img src={pic} width={40} alt="History" />
        </div>
        <div>
            <h3>{obj.text}</h3>
            <p>{obj.place_name}</p>

        </div>
    </div>
}

export default Card;
