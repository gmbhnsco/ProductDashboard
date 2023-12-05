import React from 'react'
import './Product.css'

export default function product({title,img,price,desc}) {
  //let {title,img,price,desc}=props
  return (  
    //props.count &&
        <div>
            <h2>product card</h2>
            <div class="card">
            <img className='imgCnt' src={img} alt="Denim Jeans"/>
            <h1>{title}</h1>
            <p class="price">${price}</p>
            <p>{desc}</p>
             <p>
                <button>Add to Cart</button>
            </p>
            </div>
        </div>
  )
  
}
product.defaultProps= {img:'logo512.png'}
