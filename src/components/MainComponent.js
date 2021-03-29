import React, {Component,useState} from 'react';

const MainComponent = ()=>{


    const [abc , setAbc] = useState(0);

    const inc = ()=>{
        setAbc((prevValue)=>{
            return prevValue + 1;
        });
        console.log(abc);
    }

    const dec = ()=>{
        setAbc(abc - 1);
        console.log(abc);
    }

    return(
        <div>
            <h1>Welcome from Home {abc} </h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}

export default MainComponent;
