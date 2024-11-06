import React from "react";
import "../css/Button.css"

function Button({bgColor,borderColor, txtColor, btnTxt}) {

    const border = `solid 1px  ${borderColor}`

    return(
        <div>
                <div className="btn-div" style={{backgroundColor: bgColor, border: border }}>
                    <div className="btn-txt-div">
                        <p className=".btn-text " 
                        style= {{ color: txtColor}}> 
                                {btnTxt}
                        </p>
                    </div>
                </div>
        </div>
    ) 
}

export default Button