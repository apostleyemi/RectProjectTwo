import React from 'react'

function InlineStyle() {
    const heading={
        fontSize:'100px',
        color:'purple',
        backgroundColor:'Green'
    }
    return (
        <div>
            <h1 style={heading}> This guy is Inline Styled </h1>
        </div>
    )
}

export default InlineStyle
