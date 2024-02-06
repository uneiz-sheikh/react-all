import React, { useState } from "react";
import Appdata from "./Appdata";
import Service from "./service";
import './App.css';

function Home()
{
    const [appname,setAppname] = useState('Shoppping Website');
    
    const changedata = () =>
    {
        setAppname('Thank Visit Again');
    }

    return(

        <div>
            <h1 className="head" onClick={() => changedata()}>Home Page {appname}</h1>
            <Appdata appInfo={appname}></Appdata>
            <Service appInfo={appname}></Service>
        </div>
    )
}

export default Home;