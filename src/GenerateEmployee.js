import React from 'react';

const GenerateSimpsons = ({ selectSimpsons }) => {
    return (
        <div className="GenerateSimpson">
        <button onClick={selectSimpsons}>Get Quotes </button>

        </div>
    );
};

export default GenerateSimpsons;    