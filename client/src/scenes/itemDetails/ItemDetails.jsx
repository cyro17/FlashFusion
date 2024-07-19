import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

export default function ItemDetails() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState(null);

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );

    const itemJson = await item.json();
    setItems(itemJson.data);
  }
  async function getItems() {
    const items = 
  }
  return <div>Item Details</div>;
}
