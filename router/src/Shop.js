import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
    const items = await data.json();
    console.log(items.data);
    // const a = items.data;
    // const b = a.map(item => item.item.name);
    // console.log(b);
    setItems(items.data);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;