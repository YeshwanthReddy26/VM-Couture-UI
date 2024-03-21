import {React, useState} from 'react';
import { customerReviews } from '../Utils/Constants';

function CustomerReviews() {
    const [index, setIndex] = useState(0);
    
    const handleNextClick = () => {
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
        }, 500);
    };

    const handlePrevClick = () => {
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - 1 + customerReviews.length) % customerReviews.length);
        }, 500);
    };

    return (
        <div className="reviewContainer" >
            <a className="prev" onClick={handlePrevClick} href="#!">❮</a>
            <div className="review">
                <div className='customer-review-name'>{customerReviews[index].name}</div>
                <div className='customer-review-location'>{customerReviews[index].location}</div>
                <div className='customer-review-review'>
                    <p>{customerReviews[index].review}</p>
                </div>
            </div>
            <a className="next" onClick={handleNextClick} href="#!">❯</a>
        </div>
    );

}

export default CustomerReviews;