import React from "react";
import "./Card.css"

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)
  
  const onClickPlus = () => {
    onPlus({ imageUrl, title, price })
    setIsAdded(!isAdded)
  }
  
  return (
    <div className="card">
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
          <img className="plus" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
      </div>
    </div>
  )
}

export default Card;