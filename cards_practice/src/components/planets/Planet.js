import React from "react";

function Planet(props) {
    const {planet} = props;

    return (
        <div className="Planet">
            <div className="infoCard">
                <div>
                    <img src= {planet.url} alt='missing'/>
                </div>
                <h2>{planet.name}</h2>
                <p>{planet.desc}</p>
                <h3>Extra Info</h3>
                <ul>
                    <li><strong>Moons:</strong> {planet.moons}</li>
                    <li><strong>Diameter:</strong> {planet.diameter}</li>
                </ul>
            </div>
        </div>
    );
}

export default Planet;