import React from "react";



const ColorfulMessage = (props) => {
    const {color, children} = props;
    const contentStyle = {
        color,
        fontSize: "18px"
        //キャメルケースで書く
    }
    return(
        <p style={contentStyle}>{children}</p>
    )
}

export default ColorfulMessage;