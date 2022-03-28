import './App.css';
import data from './Data/Data'
import Product from './Components/Product/Product'

function App() {
  return (
    <div className="grid-container">
          <header className="row">
      <div>
          <a className="brand" href="/">amazony</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
      </div>
    </header>
      <main>
        <div>
           <div className="row center">
         
                 {
            data.products.map(product => (
              <Product key={product._id} product={product}/>
            ))
          }
      
            </div>
        </div>    
    </main>
    <footer className="row center">Copyright &copy;All rights reserved</footer>
    </div>
  
  );
}

export default App;
