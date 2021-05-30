import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './cardItem';
import './cards.css';
import img_rbfence from '../images/rbfence.jpg';

function Cards() {
    return(
        <div className='cards'>
            <h1> Checkout these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  src={img_rbfence}
                            text="Some text about exploring" label="Adventure" path='/services'/>

                        <CardItem  src={img_rbfence}
                            text="Something else about exploring" label="Stay Away" path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem  src={img_rbfence}
                            text="Some text about exploring" label="Adventure2" path='/services'/>

                        <CardItem  src={img_rbfence}
                            text="Something else about exploring" label="Stay Away2" path='/services'/>

                        <CardItem  src={img_rbfence}
                            text="Something else about exploring" label="Stay Away3" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Cards;