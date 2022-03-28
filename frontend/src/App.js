import './App.css';
import data from './Data/Data'

function App() {
  return (
    <div className="grid-container">
          <header className="row">
      <div>
          <a className="brand" href="index.html">amazony</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
      </div>
    </header>
      <main>
        <div>
           <div className="row center">
         
                 {
            data.products.map(product => (
              <div key={product._id} className="card">
              <a href={`/products/${product._id}`}>
              <img className="medium" src={product.image} alt="product"/>
          </a>
          <div className="card-body">
                       <a href={`/products/${product._id}`}>
                    <h2>{product.name}</h2>
              </a>
             <div className="rating">
                 <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
             </div>
             <div className="price">
                 ${product.price}
             </div>
          </div>
      </div>

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
