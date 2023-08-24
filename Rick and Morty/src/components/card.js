import React, { useState ,useEffect } from 'react'
import CHars from '../fetch/fetch'
function Card() {
const [chars , setChars]= useState([])
useEffect(()=>{
setChars(CHars);
},[])
return (
<div className='container'>

<div className="row row-cols-1 row-cols-md-3 g-4 ">
{
  chars.map((character)=>(
    <div className="col">
    <div className="card">
      <img src={character.image}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.status}</p>
      </div>
    </div>
  </div>
  ))
}
</div>
</div>

)}
export default Card
