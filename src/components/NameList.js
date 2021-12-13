 import React from 'react'
import Person from './Person'
 
 function NameList() {
     const persons=[
                     {
                         id:1,
                         name:'John',
                         dept:'ICT',
                         skill:'Java',
                         age:24
                     },
                     {
                        id:2,
                        name:'Peter',
                        dept:'PPW',
                        skill:'Electical',
                        age:30
                    },
                    {
                        id:3,
                        name:'Jacob',
                        dept:'Registry',
                        skill:'Human Resource Manger ',
                        age:28
                    }
               ]
    
         const days=['Moday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday']

         const dayList=days.map((person,index)=><h2 key={index}>{index} person={person}</h2>)

        {/*  const personList= persons.map((person, index) => <Person key={person.id} person={person} />) */}
                        
          return (<div>{dayList}</div>)
 }
 
 export default NameList
 