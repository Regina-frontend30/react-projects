import { useState } from "react";

export function useList() {
  const [list, setList] = useState([]);

  const createItem = () => {
    const newItem = {
      id: Date.now(),
      title: "",
      done: false,
    };
    setList((prev) => [...prev, newItem]);
  };
  const setItemTitle = (id, title) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title } : item)),
    );
  };
  const toggleItem = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
