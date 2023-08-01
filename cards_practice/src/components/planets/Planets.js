import React, {useState,} from "react";
import PlanetDummyData from '../../dummyData';
import Planet from './Planet';

function Planets() {
    const [planetData, setPlanetData] = useState(PlanetDummyData);

    return (
        <div className="Planets">
            {planetData.map((planet) => (
                <Planet key={planet.id} planet={planet} />
            ))}
        </div>
    )
}

export default Planets;