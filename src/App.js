import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name : "Laptop", price: 55000},
    {name : "Phone", price: 25000},
    {name : "Jacket", price: 5000}
  ]
  return (
    <div className="App">
      <Counter></Counter>
      {
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }
      <External></External>
    </div>
  );
}

// Product component
function Products(props){
  // Styles using variable
  const productStyle = {
    border : "3px solid",
    borderRadius: "10px"
  };

  return (
    <div className="product" style={productStyle}>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
    </div>
  );
}

// Counter component
function Counter() {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  const handleDecrease = () => {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

//External users component
function External() {
  const[users, setUsers] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[]);

  return (
    <div>
      <h2>External users API</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

// users component
function User(props) {
  return (
    <div className = "user">
      <h2>{props.name}</h2>
      <h4>{props.email}</h4>
    </div>
  );
}


export default App;
