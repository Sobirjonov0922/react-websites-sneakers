import React from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import "./Card.css";

function Card({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false
}) {
  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const obj = { id, parentId: id, imageUrl, title, price }
  
  const onClickPlus = () => {
    onPlus(obj)
  }
  
  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }
  
  return (
    <div className="card">
      {
        loading ? (
          <ContentLoader 
            speed={2}
            width={180}
            height={250}
            viewBox="0 0 160 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="160" height="155" /> 
            <rect x="0" y="165" rx="5" ry="5" width="160" height="15" /> 
            <rect x="0" y="190" rx="5" ry="5" width="100" height="15" /> 
            <rect x="0" y="233" rx="5" ry="5" width="80" height="25" /> 
            <rect x="118" y="230" rx="10" ry="8" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            {
              onFavorite && (<div className="favorite" onClick={onClickFavorite}>
                <img src={isFavorite ? "img/liked.svg" : "img/unliked.svg"} alt="Unliked" />
              </div>)
            }
            <img width='100%' height={135} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
                {
                  onPlus && (
                    <img
                      className="plus"
                      onClick={onClickPlus}
                      src={isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"}
                      alt="Plus"
                    />
                  )
                }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Card;