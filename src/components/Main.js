import React from 'react';
import data from './Data';
import '../styles/Main.css';
import Cards from './Cards';

const Main = ({ handleClick }) => {
  return (
    <section className='categories'>
      {Object.keys(data).map((category) => (
        <div className='category-container' key={category}>
          <h1>{category}</h1>
          <div className='category'>
            {data[category].map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Main;
