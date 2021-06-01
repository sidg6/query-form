import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import './ThankYouSlider.css';

const OPTION_BUNDLE = [
    {
        "name": "Mini Kerala - Value Added",
        "subInfo": ["4 Nights / 5 Days", "17 Sep", "2 Adults"],
        "lobs": ["Hotels", "Flights", "Transfers", "Activities"],
        "imgObj": {
            "url": "../../assets/recentImg.png",
            "alt": "image1"
        },
        "actualPrice": "₹30,000/-",
        "strikeOffPrice": "₹32,000"
    },
    {
        "name": "Mini Kerala - Value Added1",
        "subInfo": ["4 Nights / 5 Days", "17 Sep", "2 Adults"],
        "lobs": ["Hotels", "Flights", "Transfers", "Activities"],
        "imgObj": {
            "url": "../../assets/recentImg.png",
            "alt": "image1"
        },
        "actualPrice": "₹30,000/-",
        "strikeOffPrice": "₹32,000"
    },
    {
        "name": "Mini Kerala - Value Added2",
        "subInfo": ["4 Nights / 5 Days", "17 Sep", "2 Adults"],
        "lobs": ["Hotels", "Flights", "Transfers", "Activities"],
        "imgObj": {
            "url": "../../assets/recentImg.png",
            "alt": "image1"
        },
        "actualPrice": "₹30,000/-",
        "strikeOffPrice": "₹32,000"
    },
    {
        "name": "Mini Kerala - Value Added3",
        "subInfo": ["4 Nights / 5 Days", "17 Sep", "2 Adults"],
        "lobs": ["Hotels", "Flights", "Transfers", "Activities"],
        "imgObj": {
            "url": "../../assets/recentImg.png",
            "alt": "image1"
        },
        "actualPrice": "₹30,000/-",
        "strikeOffPrice": "₹32,000"
    }
]

const ThankYouSlider = ({ isMobile }) => {

    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(true);
    const slider = useRef();

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        variableWidth: true,
        afterChange: (currentSlide) => {
            if (currentSlide === OPTION_BUNDLE.length - 1) {
                setDisableNext(true);
            }
            else {
                setDisableNext(false);
            }
            if (currentSlide === 0) {
                setDisablePrev(true);
            }
            else {
                setDisablePrev(false);
            }
        }
    };

    const nextSlide = () => {
        slider.current.slickNext();
    }

    const prevSlide = () => {
        slider.current.slickPrev();
    }

    const slides = (
        OPTION_BUNDLE.map((item, index) => (
            <div key={index} className="slideItem">
                <div className="imageWrapper" style={{ width: "107px", overflow: "hidden", marginRight: "8px" }}>
                    <img className="recentImg" src={item.imgObj.url} alt={item.imgObj.alt} />
                </div>
                <div className="flexOne relative">
                    <p className="cardHeading">{item.name}</p>
                    {
                        item.subInfo && <ul className="subInfo">
                            {
                                item.subInfo.map((list, index) => {
                                    return (
                                        <React.Fragment>
                                            <li key={index}>
                                                {list}
                                            </li>
                                            {index !== (item.subInfo.length - 1) ? <span className="greyd8 circle">•</span> : ''}
                                        </React.Fragment>
                                    );
                                })
                            }
                        </ul>
                    }
                    {
                        item.lobs && <ul className="lobs">
                            {
                                item.lobs.map((list, index) => {
                                    return (
                                        <React.Fragment>
                                            <li key={index}>
                                                {list}
                                            </li>
                                            {index !== (item.lobs.length - 1) ? <span className="greena9e4e2 circle">•</span> : ''}
                                        </React.Fragment>
                                    );
                                })
                            }
                        </ul>
                    }
                    <div className="priceWrapper">
                        <span className="strikethrough strikePrice" style={{ alignSelf: "baseline" }}>{item.strikeOffPrice}</span>
                        <span className="newPrice">{item.actualPrice}<span className="font11 greyText appendLeft10 latoRegular">per person</span></span>
                    </div>
                </div>
            </div>
        ))
    )

    return (
        <div className="page-section thankYouWrapper">
            <div className="makeFlex hrtlCenter appendLeft8 spaceBetween headingWrapper">
                <div className="makeFlex column">
                    <p className="font18 latoBolder blackText appendBottom5">
                        <span className="sliderHeading">Meanwhile checkout top packages for </span>
                        <span className="lightGreen">Kerala</span>
                    </p>
                    <p className="sliderSubHeading">Curated by our holiday experts</p>
                </div>
                <div className="arrowWrapper">
                    <span className={`backArrow ${disablePrev ? 'disabled' : ''}`} onClick={prevSlide}></span>
                    <span className={`nextArrow ${disableNext ? 'disabled' : ''}`} onClick={nextSlide}></span>
                </div>
            </div>
            <div className="landingCardSlider">
                {
                    !isMobile ?
                        <Slider {...settings} ref={slider}>{slides}</Slider> :
                        <div className="sliderWrapper">
                            {slides}
                        </div>
                }
            </div>
        </div>
    );
}
export default ThankYouSlider;
