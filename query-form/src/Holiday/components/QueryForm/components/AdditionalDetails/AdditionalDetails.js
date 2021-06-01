import React, { useState } from 'react';
import BudgetSlider from '../../common/BudgetSlider/BudgetSlider';

const ratingList = [
    "3 Star",
    "4 Star",
    "5 Star"
]

const AdditionalDetails = () => {

    const [selectedRating, setSelectedRating] = useState(null);

    const ratingHandler = (rating) => {
        setSelectedRating(rating);
    }

    return (
        <div className="additionalDetailsWrapper">
            <div className="makeFlex column">
                <p className="latoBold appendBottom10">What kind of hotels  are you looking for?</p>
                <div className="makeFlex appendBottom20">
                    {
                        ratingList.map((rating, index) => {
                            return (
                                <div
                                    tabIndex={0}
                                    key={index}
                                    className={`ratingWrapper ${rating === selectedRating ? 'selected' : ''}`}
                                    onClick={() => ratingHandler(rating)}
                                    onKeyDown={() => ratingHandler(rating)}>
                                    {rating}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="amountWrapper">
                    <p className="appendBottom5 latoBold">What’s your budget like?</p>
                    <p className="amount">&nbsp;(₹4000 - ₹8000)</p>
                </div>
                <BudgetSlider />
            </div>
        </div>
    )
}

export default AdditionalDetails;
