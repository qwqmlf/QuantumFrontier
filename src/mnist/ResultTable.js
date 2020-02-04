import React from 'react'
import Accuracy from './Accuracy.js';

function ResultTable() {
    return (
        <div>
            <table className="table">
                <thead>
       
                </thead>
                <tbody>
                <Accuracy no={0} />
                <Accuracy no={1} />
                <Accuracy no={2} />
                <Accuracy no={3} />
                <Accuracy no={4} />
                <Accuracy no={5} />
                <Accuracy no={6} />
                <Accuracy no={7} />
                <Accuracy no={8} />
                <Accuracy no={9} />
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;