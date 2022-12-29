import React from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://63919607b750c8d178c72c9d.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов')
        console.error(error)
      }
    })()
  }, [])
  
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {
          (isLoading ? [...Array(4)] : orders).map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Orders;