import { useEffect, useState } from "react";
import "./App.css";
import { getOrders , newOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((fetchedOrders) => {
        setOrders(fetchedOrders.orders);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  }
  const createOrder = (order) => {
    newOrder(order)
    .then((success) =>{
      if(success){
        addOrder(order)
    } else {
      alert('Your Burrito has not been ordered, please try again.')
    }
   })
   .catch((error) =>{
    console.error("An error occured:", error);
   });
    
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm createOrder={createOrder} />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
