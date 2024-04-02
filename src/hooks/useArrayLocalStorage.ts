import { useEffect, useState } from "react";

const useArrayLocalStorage = <T extends { id: number }>(key: string) => {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    const storedItems = window.localStorage.getItem(key);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [key]);

  const pushItem = (value: T) => {
    setItems((prevItems) => [...prevItems, value]);
    window.localStorage.setItem(key, JSON.stringify([...items, value]));
  };

  const getItem = (): T[] => {
    return items;
  };

  const deleteItem = (idToDelete: number) => {
    const updatedArray = items.filter(({ id }) => idToDelete !== id);
    setItems(updatedArray);
    window.localStorage.setItem(key, JSON.stringify(updatedArray));
  };

  return { pushItem, getItem, deleteItem };
};

export default useArrayLocalStorage;
