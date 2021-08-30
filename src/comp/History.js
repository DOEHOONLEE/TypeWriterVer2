import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 330px;
    height: 30px;
    font-size: 21px;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
`;

function History({ histories }) {

    console.log(histories)

    return (
        <div>
            <h2 className="historyList">
                Ranking History
            </h2>
            <p>correct: 10 - mistakes: 2</p>
        </div>
    )
}

export default History;
