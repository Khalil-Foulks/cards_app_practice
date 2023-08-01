import React from "react";

function Planet(props) {
    const {planet} = props;

    return (
        <div className="Planet">
            <img src= {planet.url} alt='missing'/>
            <p>{planet.name}</p>
            <p>{planet.moons}</p>
            <p>{planet.diameter}</p>
            <p>{planet.desc}</p>
        </div>
    );
}

export default Planet;