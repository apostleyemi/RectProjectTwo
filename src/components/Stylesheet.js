import React from 'react'
import  './Mysheet.css'

function Stylesheet(props) {
    let className=props.primary ? 'bg-success aligncenter': ''
    return (
  
        <div className={className}>
            <h1 className="text-color">Stylesheet Tutorial</h1>
        </div>
    )
}

export default Stylesheet
