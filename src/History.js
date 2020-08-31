import React from 'react';

function Scores({ date, wpm }) {
    return (
        <h3 className="historyList">
            {date} [{wpm} WPM]
        </h3>
    )
}

function History({ counter }) {
    const getData = () => {

    }

    const scores = {...localStorage};
    const scoreHistory = [];

    for (let elem in scores) {
        scoreHistory.push([elem, scores[elem]]);
    }

    return (
        <div>
            <h2 className="historyList">
                History
            </h2>
            {
                scoreHistory.map(
                    (eachScore, index) => (
                        <Scores
                            date={eachScore[0]}
                            wpm={eachScore[1]}
                            key={index}
                        />
                    )
                )
            }
        </div>
    )
}

export default History;