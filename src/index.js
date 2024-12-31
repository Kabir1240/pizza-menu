import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// import { pizzaData } from "./data.js";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
const App = () => {
    return(
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const Header = () => {
    return (
        <header className="header">
            <h1>
                Fast React Pizza Co.
            </h1>
        </header>
    )
}

const Footer = () => {
    const currentHour = new Date().getHours()
    const openHour = 9
    const closeHour = 22
    const isOpen = openHour <= currentHour && currentHour <= closeHour
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : <p>We're closed until {openHour}:00. Please come back later</p>}
        </footer>
    )
}

const Order = ({ closeHour, openHour }) => {
    <div className="order">
        <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order</p>
        <button className="btn">Order</button>
    </div>
}

const Menu = () => {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
                {numPizzas > 0 ? (
                    <>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from
                            our stove oven, all organic, all delicious.
                        </p>

                        <ul className="pizzas">
                            {pizzaData.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name}/>
                            ))}
                        </ul>
                    </>
                ) : <p>We're still working on our menu. Please come back later</p>}
        </main>
    );
}

const Pizza = ({ pizzaObj }) => {
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

    const root = ReactDOM.createRoot(document.getElementById ("root"));
    // React.StrictMode is for developing. It renders components twice to test
    // for certain bugs
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
