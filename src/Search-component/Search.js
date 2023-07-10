import axios from "axios";
import React, { useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Search.css"
import Card from "./Card-component/Card";
function Search({ map }) {
    const [mapData, setData] = useState();
    const [msg, setMsg] = useState("");
    async function search(e) {
        e.preventDefault();
        if (e.target.value !== "") {
            let res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?&access_token=${mapboxgl.accessToken}`);
            let newCord = res?.data?.features[0]?.center;
            if (newCord) {
                setMsg("");
                setData(res?.data?.features);
            } else {
                setMsg("Your Search Text Did Not Match Any Feature. ");
            }
        } else {
            setMsg("");
            setData([]);
        }
    }
    return <>

        <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>

            <input name='place' placeholder='Search' type="search" class="input" onChange={e => search(e)} />
        </div>
        <br />
        {mapData?.map(elem => <Card obj={elem} map={map} />)}
        {msg !== "" && <p>{msg}</p>}
    </>
}

export default Search;
