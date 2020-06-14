import React from 'react';

function Prayers (props){
    return ( 
        <div>
        <h1> I am {props.name}</h1>
        <p> "This is my 3rd Assignment" </p>

        <hr/>
        
        <h1> May Allah Blessed You..! {props.prayerName} </h1>

        <hr/>

        <h1> We Always Say {props.prayerName1} </h1>
        </div>

    )
}

export default Prayers