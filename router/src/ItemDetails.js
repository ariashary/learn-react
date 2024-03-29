import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetails({match}) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
      images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);

    console.log(match.params.id);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparant} alt=""/>
    </div>
  );
}

export default ItemDetails;