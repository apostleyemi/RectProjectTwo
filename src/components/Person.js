import React from 'react'


function Person({person}) {
    return (
        <div>
            <h2>ID : {person.id}. Name:{person.name}. Dept: {person.dept}. Skill : {person.skill}. Age: {person.age}</h2>
        </div>
    )
}

export default Person
