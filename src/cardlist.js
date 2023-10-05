import React from 'react';
import Card from './Card.js';
import Robots from './robots.js';
const Cardlist=({Robots})=>{
    const cardcomponent= Robots.map((user,i) => {
     return   <Card key={i}
      id={Robots[i].id} 
      name={Robots[i].name} 
      email={Robots[i].email} 
      username={Robots[i].username}/>

    })
    return(
        <div>
    {cardcomponent}
        </div>
    );
}

export default Cardlist;