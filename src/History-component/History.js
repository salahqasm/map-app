import React, { useEffect, useState } from "react";
import hisLogo from "../history.png"
import "./History.css"

function History({ map, refresh }) {
    const [his, setHis] = useState();   
    
    useEffect(() => {
        setHis(JSON.parse(localStorage.getItem('history')));
    }, [refresh])

    function onClickHandler(elem){
        map.current.flyTo({ center: elem.center, zoom: 10 });
    }

    return <label className="popup">
        <input type="checkbox" />
        <div className="burger" tabIndex="0">
            <img src={hisLogo} alt="History" width={23} title="History"/>
        </div>
        <nav className="popup-window">
            <ul>
                {his?.map(elem => <>
                    <li onClick={() => onClickHandler(elem)}>
                        <button>
                            <strong>{elem.name}</strong>
                        </button>
                    </li>
                    <hr />
                </>
                )}
            </ul>
        </nav>
    </label >

}
export default History;

