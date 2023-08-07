export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      throw error; 
    });
};

export const newOrder = (dataIn) => {
  fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(dataIn),
      headers: {"Content-Type": "application/json"}
      
      }).then(res => res.json())
      .then(data => {
          console.log(data);
      })
      .catch((error) => {
        console.error("Error Posting New Orders:", error);
        throw error; 
      });
};
