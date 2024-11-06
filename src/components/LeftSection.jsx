import React from "react";
import "../css/LeftSection.css"
import Button from "./Button";

function LeftSection() {
    return(
        <div id="left-section-div">
                <div className="left-section-heading-div">
                    <div className="left-section-content-div">
                        <p className="left-section-heading-text"> Navigating the <br/> digital landscape <br/> for success </p>
                    </div>

                    <div className="left-section-content-description-div">
                        <p className="left-section-content-description-txt">
                            Our digital marketing agency helps businesses <br/>
                            grow and succeed online through a range of <br/>
                            services including SEO, PPC, social media marketing, <br/>
                            and content creation.  
                        </p>
                    </div>

                    <div className="bottom-left-section-btn-div">
                         <Button 
                                bgColor="black"
                                borderColor="black"
                                txtColor="white"
                                btnTxt="Book a consultation"
                         />
                    </div>
                </div>
        </div>
    )
}

export default LeftSection;