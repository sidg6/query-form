import React from 'react';
import Button from '../../common/Button/Button';
import CustomModalWrapper from '../../common/CustomModalWrapper/CustomModalWrapper';
import MultiSelectOptions from './MultiSelectOptions';
import RadioOptions from './RadioOptions';
import './SimilarRequestModal.css';

const SimilarRequestModal = (props) => {

    return (
        <CustomModalWrapper width={632} {...props} classes="similarRequestModalWrapper">
            <span className="queryFormBgProperties backArrowBlack left" onClick={props.onRequestClose}></span>
            <span className="queryFormBgProperties closeIcon" onClick={props.onRequestClose}></span>
            <header className="similarRequestHeader">
                <span>Similar request found</span>
            </header>
            <div className="info">
                Hi Devesh! It seems you have another request with us for <span className="lightGreen">Andaman</span>
            </div>
            <div className="content">
                <div className={`contentHeading ${props.showMultiSelect ? 'multiselect' : 'radio'}`}>Kindly tell us how you’d like to proceed?</div>
                {
                    props.showMultiSelect ?
                        <MultiSelectOptions /> :
                        <RadioOptions />
                }
            </div>
            <footer>
                <Button
                    btnTxt="Submit"
                    containerStyle={{
                        backgroundImage: 'unset',
                        backgroundColor: '#008cff',
                        padding: '13px 60px',
                        textTransform: 'uppercase',
                        boxShadow: '0 1px 7px 0 rgba(0, 0, 0, 0.2)',
                        marginTop: '50px'
                    }} />
                <div className="nextBtnWrapper">
                    <span className="nextStep">Next</span>
                    <span className="queryFormBgProperties backArrowBlue"></span>
                </div>
            </footer>
        </CustomModalWrapper>
    )
}

export default SimilarRequestModal;
