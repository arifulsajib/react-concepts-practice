import './App.css';

function App() {
  const products = [
    {name : "Laptop", price: 55000},
    {name : "Phone", price: 25000},
    {name : "Jacket", price: 5000},
    {name : "Shoe", price: 1500}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }
    </div>
  );
}

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

export default App;
