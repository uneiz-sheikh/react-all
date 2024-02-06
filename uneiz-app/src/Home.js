import React, { useState } from "react";
import Service from "./Service";
import Banner from "./Banner";

function Home(){

    const [name, setname] = useState('Loading !');

    const changevalue = () =>
    {
        setname('Open Server')
    }

    return(
        <>
                
            <h1>Home Page {name}</h1>
            <Banner data={name}></Banner>
            <Service data={name}></Service>

            <button onClick={() => changevalue()}>change</button>

        </>
    )
}

export default Home;