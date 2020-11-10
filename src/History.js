import React from 'react';

function Scores({ date, wpm, index }) {
    return (
        <h3 className="historyList highlight">
            {index+1}. &nbsp; {date} [{wpm} WPM]
        </h3>
    )
}

function History({ counter, nextID }) {
    const getData = () => {

    }

    const scoreHistory = [];

    for (let i=1; i <= localStorage.length; i++) {
        const scores = {...localStorage};
        const temp = JSON.parse('"scores[i]"');
        scoreHistory.push([temp.date, temp.record])
    }
    
    scoreHistory.sort((a,b) => b[1] - a[1]);

    return (
        <div>
            <h2 className="historyList">
                Ranking History
            </h2>
            {
                scoreHistory.map(
                    (eachScore, index) => (
                        <Scores
                            date={eachScore[0]}
                            wpm={eachScore[1]}
                            key={index}
                            index={index}
                        />
                    )
                )
            }
        </div>
    )
}

export default History;