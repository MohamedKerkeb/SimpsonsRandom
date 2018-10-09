import React from "react";

const DisplaySimpsons = ({ simpsons }) => {
    return (
        <div className="DisplaySimpsons">
            <img src={simpsons.image} alt="..." />
            <ul>
                <li>Character : {simpsons.character}</li>
                <li>Quote : {simpsons.quote}</li>
            </ul>
        </div>
    );
};

export default DisplaySimpsons;