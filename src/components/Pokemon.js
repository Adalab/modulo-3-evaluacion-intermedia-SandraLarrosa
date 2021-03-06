import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {
  const type = props.types.map((type, index) => {
    return (
      <li className={`${type} cardPokemon__type__list`} key={index}>
        {type}
      </li>
    );
  });

  return (
    <>
      <article className='cardPokemon'>
        <div className='cardPokemon__img'>
          <img src={`${props.img}`} alt={props.name}></img>
        </div>
        <h3 className='cardPokemon__name'>{props.name}</h3>
        <ul className='cardPokemon__type'>{type}</ul>
      </article>
    </>
  );
};

Pokemon.propTypes = {
  type: PropTypes.array,
  img: PropTypes.string,
  name: PropTypes.string,
};

export default Pokemon;
