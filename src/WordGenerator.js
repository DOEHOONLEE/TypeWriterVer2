import React from 'react';
import faker from 'faker';
import WordPrinter from './WordPrinter';

function WordGenerator() {

    const WordContainer = [];

    for (let i=0; i < 200; i++) {
        WordContainer.push(
            faker.random.word().split(" ")[0]
        );
    };

    return (
        <div>
            {
                WordContainer.map(
                    (eachWord,index) => (
                        <WordPrinter word={eachWord} key={index} />
                    )
                )
            }
        </div>
    );
};

export default WordGenerator;