import React, { useState, useEffect } from "react";
import { newOrder } from "../../apiCalls";

function OrderForm(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  function handleIngredientClick(ingredient, e) {
    e.preventDefault();
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    setIsSubmitDisabled(!(name.trim()!== "" && ingredients.length > 0));
  }, [name, ingredients]);

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      name,
      ingredients
      
    }
    props.createOrder(newOrder) 
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
    setIsSubmitDisabled(true);
  };

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => handleIngredientClick(ingredient , e)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleNameChange}
        />
      

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)} disabled={isSubmitDisabled}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
