import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

function CardItem(props) {

  const [isBig, setSize] = useState(false);

  const showBig = () => {
      if (window.innerWidth <= 1060) {
          setSize(false);
      } else {
          setSize(true);
      }
  };

  useEffect(() => {
      showBig()
  }, []);

  window.addEventListener('resize', showBig)

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
            <h5 className={isBig ? 'contact-cards__item__text':'contact-cards__item__text__small'}>{props.text}</h5>
          </div>
        </p>
      </li>
    </>
  );
}

export default CardItem;