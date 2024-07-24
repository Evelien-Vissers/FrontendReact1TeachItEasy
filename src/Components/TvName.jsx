import React from 'react';
import {generateTvName} from '../helpers/generateTvName.js';
import {bestSellingTv} from '../inventory'; //importeert het tv-object of een ander gewenst tv-object

const TvName = ({ tv }) => {
    const tvName = generateTvName(tv);

    return (
        <div>
            <p>{tvName}</p>
        </div>
    );
};
export default TvName;