import React from 'react';
import './CustomModalWrapper.css';

const CustomModalWrapper = ({ width, children, containerStyle, contentContainerStyle, onRequestClose, classes }) => {
    if (children) {
        return (
            <div className="modalWrapper" style={{ containerStyle }}>
                <div className="backgroundOverlay" onClick={onRequestClose}></div>
                <div className={`contentWrapper ${classes}`} style={{ ...contentContainerStyle, width }}>
                    {children}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default CustomModalWrapper;
