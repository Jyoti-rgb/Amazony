import React from 'react'
import data from '../Data/Data'
import Product from '../Product/Product'
export default function HomeScreen() {
  return (
           <div>
           <div className="row center">
         
                 {
            data.products.map(product => (
              <Product key={product._id} product={product}/>
            ))
          }
      
            </div>
        </div>    

  )
}
