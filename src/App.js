import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(1);

  function addItem(e) {
    e.preventDefault();
    if (!itemName) return;

    const newItem = { id: Date.now(), name: itemName, qty: qty, isDone: false };
    console.log(newItem);
    setItems((items) => [...items, newItem]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }

  function updateIsDone(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  return (
    <div className="container">
      <Header></Header>
      <Main>
        <>
          <Box>
            <Form
              itemName={itemName}
              setItemName={setItemName}
              qty={qty}
              setQty={setQty}
              addItem={addItem}
            />
          </Box>
          <Box>
            {items.length > 0 ? (
              items.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  updateIsDone={updateIsDone}
                />
              ))
            ) : (
              <Message />
            )}
          </Box>
        </>
      </Main>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="heading-1">
        ToDo <span>List</span>
      </h1>
    </header>
  );
}

function Main({ children }) {
  return (
    <main>
      <>{children}</>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>Copyright @ {new Date().getFullYear()} - yenkoSS</small>
    </footer>
  );
}

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Message() {
  return <p>List is empty</p>;
}

function Form({ itemName, setItemName, qty, setQty, addItem }) {
  return (
    <form onSubmit={addItem}>
      <h2 className="heading-2">Add item</h2>
      <input
        type="text"
        placeholder="Enter item name..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter qty..."
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

function Item({ item, deleteItem, updateIsDone }) {
  return (
    <div className={!item.isDone ? "item-box" : "item-box done"}>
      <input
        type="checkbox"
        className="checkbox"
        value={item.isDone}
        onClick={() => updateIsDone(item.id)}
      ></input>
      <p className="text-item">
        {item.qty}
        <span>x</span>
        {item.name}
      </p>
      <button onClick={() => deleteItem(item.id)}>X</button>
    </div>
  );
}

export default App;
