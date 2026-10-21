/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/restaurant-details.css";
import "../css/responsive.css";

const RestaurantDetails = () => {
  const restaurant = {
    name: "Dominos",
    cuisine: "Pizza, Fast Food",
    rating: "⭐ 4.3",
    delivery: "25 mins",
    cost: "₹500 for two",
    image: "/images/logo/restaurants/dominos.jpg",
  };

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const menu = [
    {
      name: "Margherita Pizza",
      price: 249,
      img: "/images/logo/foods/margherita-pizza.jpg",
    },
    {
      name: "Veg Burger",
      price: 129,
      img: "/images/logo/foods/veg-burger.jpg",
    },
    {
      name: "Chicken Biryani",
      price: 299,
      img: "/images/logo/foods/chicken-biryani.jpg",
    },
    {
      name: "Gulab Jamun",
      price: 99,
      img: "/images/logo/foods/gulab-jamun.jpg",
    },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      let updatedCart;

      if (existing) {
        updatedCart = prevCart.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="restaurant-banner">
          <div className="container restaurant-banner-content">
            <div className="restaurant-banner-image">
              <img src={restaurant.image} alt={restaurant.name} />
            </div>
            <div className="restaurant-banner-text">
              <h1>{restaurant.name}</h1>
              <p>{restaurant.cuisine}</p>
              <div className="restaurant-stats">
                <span>{restaurant.rating}</span>
                <span>{restaurant.delivery}</span>
                <span>{restaurant.cost}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container section-gap">
          <div className="menu-header">
            <h2>Menu</h2>
            <p>Choose your favorite dishes</p>
          </div>

          <div className="food-items-grid">
            {menu.map((item, index) => (
              <div className="food-card card" key={index}>
                <img src={item.img} alt={item.name} />
                <div className="food-info">
                  <h3>{item.name}</h3>
                  <strong>₹{item.price}</strong>
                  <button
                    className="btn small-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RestaurantDetails;