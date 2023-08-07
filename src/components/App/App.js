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
    newOrder(order);
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm createOrder={createOrder} addOrder={addOrder} />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
