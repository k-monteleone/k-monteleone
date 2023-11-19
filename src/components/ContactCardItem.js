import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='contact-cards__item'>
        <p className='contact-cards__item__link'>
          <figure className='contact-cards__item__pic-wrap' data-category={props.label}>
            <img
              className='contact-cards__item__img'
              alt='Example'
              src={props.src}
            />
          </figure>
          <div className='contact-cards__item__info'>
            <h5 className='contact-cards__item__text'>{props.text}</h5>
          </div>
        </p>
      </li>
    </>
  );
}

export default CardItem;