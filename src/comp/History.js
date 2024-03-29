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
    console.log(localStorage.getItem("records"))
    const obj_deserialized = JSON.parse(localStorage.getItem("records"));

    const recordsSorted = [...obj_deserialized].sort((a,b) => b.record - a.record);

    console.log(recordsSorted)

    return (
        <div>
            <h2 className="historyList">
                Ranking History
            </h2>
            {
                recordsSorted.map(c => (
                    <HistoryContainer key={c.id}>
                        <span>{c.date}</span>
                        <span>{c.record} (WPM)</span>
                    </HistoryContainer>
                ))
            }
        </div>
    )
}

export default History;
