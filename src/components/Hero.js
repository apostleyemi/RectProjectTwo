import React from 'react'

function Hero({heroName}) {
    if(heroName=='Judas'){
        throw new Error('This is not  a good name!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
