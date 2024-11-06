import React from "react";

import amazon from "../images/Logo/amazon.png"
import dribble from "../images/Logo/dribble.png"
import hubspot from "../images/Logo/hubspot.png"
import netflix from "../images/Logo/netflix.png"
import notion from "../images/Logo/notion.png"
import zoom from "../images/Logo/zoom.png"

function CompanyLogo({brandName}) {

    const companyArray = [amazon, dribble, hubspot, netflix, notion, zoom]
    return(
        <>
            <img src={companyArray[brandName]} />
        </>
    )
}


export default CompanyLogo;