import React from 'react';

function Record({ correct, mistakes }) {
    return (
        <div>
            <h4>correct words: {correct}</h4>
            <h4>mistakes: {mistakes}</h4>
        </div>
    )
}

export default Record;