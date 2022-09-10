import React from 'react';
import 'tachyons';

function card({name, email, id}){   
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow tc">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;