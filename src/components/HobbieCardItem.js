import React from 'react';

function HobbieCardItem(props) {
  return (
    <>
      <li className='hobbie-cards__item'>
        <a className='hobbie-cards__item__link' href={props.path} target="_blank" rel="noreferrer">
          <figure className='hobbie-cards__item__pic-wrap' data-category={props.label}>
            <img
              className='hobbie-cards__item__img'
              alt='Example'
              src={props.src}
            />
          </figure>
        </a>
      </li>
    </>
  );
}

export default HobbieCardItem;