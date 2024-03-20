import {React, useState} from 'react';
import { customerReviews } from '../Utils/Constants';

function CustomerReviews() {
    const [index, setIndex] = useState(0);
    
    const handlePrevClick = () => {
        if(index === 0){
            setIndex(customerReviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const handleNextClick = () => {
        if(index === customerReviews.length - 1){
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
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