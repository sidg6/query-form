import React, { useState } from 'react';
import { Range } from 'rc-slider';
import './BudgetSlider.css';

const trackStyle = [{ backgroundColor: '#008cff', height: '6px' }];
const handleStyle = [{
    width: '24px',
    height: '24px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#bcbcbc',
    borderRadius: '20px',
    marginTop: '-9px',

    boxShadow: 'none'
},
{
    width: '24px',
    height: '24px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#bcbcbc',
    borderRadius: '20px',
    marginTop: '-9px',

    boxShadow: 'none'
}
];

const newStyle = { height: '6px', minHeight: '6px' };

const BudgetSlider = () => {
    const [minRange] = useState(4000);
    const [maxRange] = useState(100000);
    const [dynamicRangee, setRange] = useState([5000, 100000]);


    const onSliderChange = (value) => {
        setRange(value)
    }

    const formattedMinRange = dynamicRangee[0].toLocaleString();
    const formattedMaxRange = dynamicRangee[1].toLocaleString();

    return (
        <div className="filtersOuter mapSlider budgetSlider">
            <div className="rangeSlider">
                <Range
                    trackStyle={trackStyle}
                    handleStyle={handleStyle}
                    newStyle={newStyle}
                    allowCross={false}
                    min={minRange}
                    max={maxRange}
                    value={dynamicRangee}
                    onChange={onSliderChange}
                    step={1}
                />
                <div className="makeFlex spaceBetween darkText">
                    <span>{`₹${formattedMinRange}`} </span>
                    <span>{`₹${formattedMaxRange}`}</span>
                </div>
            </div>
        </div>
    );
}

export default BudgetSlider;
