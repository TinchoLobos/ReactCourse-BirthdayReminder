import React from 'react';
import data from './data'
import { useState } from 'react';

const List = () => {
const [people,setPeople] = useState(data);
const cleanAll = () =>{
setPeople([])
}
const refresh = () =>{
setPeople(data)
}

return(
  <>
  <section className='container'>
  <h3>{people.length} Birthdays today</h3>
  {people.map((person)=>{
    const {id,name,age,image} = person
  return(
    <>
    <div key={id} className='singlePerson'>
      <img className='userImg' src={image} alt={name} />
      <div>
      <h4>{name}</h4>
      <h5>{age} years old</h5>
      </div>
    </div>
    </>
  )
  })}
   <button type='button' onClick={cleanAll} className='btn'>Clean All</button>
   <button type='button' onClick={refresh} className='btn'>Refresh</button>

  </section>
 

  </>
)
};

export default List;
