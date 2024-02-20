import { useState } from "react";
import Logo from "./logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all item?"
    );
    if (confirmed) setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        ondeleteItems={handleDeleteItems}
        onTogggleItem={handleToggleItem}
        onClearItems={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
