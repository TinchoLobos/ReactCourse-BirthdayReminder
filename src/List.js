import React from 'react';

const List = ({people}) => {
return(
  <>
  {people.map((person)=>{
    const {id,image,name,age} = person;
    return(
    <section className='person' key={id}>
      <img src={image} alt={name} />
      <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Number: {id}</p>
      </div>
    </section>
    )
  })}
  </>
)
};

export default List;
