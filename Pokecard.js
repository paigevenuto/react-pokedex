import React from 'react'
import './Pokecard.css'

function Pokecard({name, type, base_experience, id}) {
    return (
        <div className="pokecard">
            <h2>{name}</h2>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} alt="Pokemon" />
            <p>
                Type: {type}
            </p>
            <p>
                EXP: {base_experience}
            </p>
        </div>
    )
};

export default Pokecard
