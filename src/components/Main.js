import React from 'react';
import data from './Data';
import '../styles/Main.css';
import Cards from './Cards';

const Main = ({handleClick}) => {
  return (
    <section>
        {
            data.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
    </section>
  )
}

export default Main
