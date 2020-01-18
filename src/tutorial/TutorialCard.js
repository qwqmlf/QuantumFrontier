import React, { Component } from 'react';

import TutorialCardItem from './TutorialCardItem';
import uuid from 'uuid';


export class TutorialCard extends Component {
    state = {
        items: [
            {
                id: uuid.v4(),
                title: 'QWNN：部門１', 
                description: '量子ウォークニューラルネットについてのコンペティション', 
                image: '', 
            },
            {
                id: uuid.v4(),
                title: 'QWNN：部門２', 
                description: '量子ウォークニューラルネットについてのコンペティション', 
                image: '', 
            },
            {
                id: uuid.v4(),
                title: 'QWNN：部門３', 
                description: '量子ウォークニューラルネットについてのコンペティション', 
                image: '', 
            },
        ]   
    }

    render() {
        return this.state.items.map((item)=>(
            <span style={cardStyle}>
                <TutorialCardItem item={ item } />
            </span>
        ));
    }
}


// styles
const cardStyle = {
    margin: '40px',

}

export default TutorialCard;
