import React from "react";
import "../css/ServiceCard.css";

// 
import darkArrowImg from "../images/dark-arrow-icon.png";
import lightArrowImg from "../images/light-arrow-icon.png";


// Card Right Elements 
import cardOneRightElement from "../images/card-1-right-element.png"
import cardTwoRightElement from "../images/card-2-right-element.png"
import cardThreeRightElement from "../images/card-3-right-element.png"
import cardFourRightElement from "../images/card-4-right-element.png"
import cardFiveRightElement from "../images/card-5-right-element.png"
import cardSixRightElement from "../images/card-6-right-element.png"


function ServiceCardDark({serviceTxtOne, serviceTxtTwo, bgColor, textBgColor, rightImgElement, isDark }) {
 
  const cardRightElements = [cardOneRightElement, cardTwoRightElement, cardThreeRightElement, cardFourRightElement, cardFiveRightElement, cardSixRightElement]
  return (

    <div id="service-card-div" style={{backgroundColor: bgColor}}>
            <div className="left-section-div">
                <div className="service-title-div">
                    <div className="service-title-text-1" style={{backgroundColor: textBgColor}}>{serviceTxtOne}</div>
                    <div className="service-title-text-2" style={{backgroundColor: textBgColor}}>{serviceTxtTwo}</div>
                </div>
            

                <div className="dark-icon-div">
                    <div className="dark-icon">
                        <img src={isDark ? darkArrowImg : lightArrowImg }/>
                    </div>

                    <div className="learn-mor-div">
                        <p className="learn-more-text" style={isDark ? {color: "black"}: {color:"white"}}> Learn more </p>
                    </div>
                </div>
            </div>

            <div className="right-section-div">
                <div className="right-section-img">
                    <img src={cardRightElements[rightImgElement]} />
                </div>
            </div>

    </div>
  
  );
}

export default ServiceCardDark;




