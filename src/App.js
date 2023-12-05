import './App.css';
import Product from './Products/Product';

function App() {
  const allProducts = [
    {title:'Tailored Jeans', count:2, img:'img/1.jpg', price:120 ,desc:'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.'},
    {title:'Tailored ', count:2,  price:120 ,desc:'Some text about the jeans.'},
    {title:'Jeans', count:2, img:'img/3.jpg', price:120 ,desc:'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'},
    {title:'Tailored Jeans', count:2, img:'img/4.jpg', price:120 ,desc:'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'}
  ]
  return (
    <div class='container'>
       {/* <Product {...allProducts.map((product)=> product.price)} /> */}

      <Product {...allProducts[0]} />
      <Product {...allProducts[1]} />
      <Product {...allProducts[2]} />
      <Product {...allProducts[3]} />

      {/* <Product title={allProducts[0].title} count={allProducts[0].count} img={allProducts[0].img} price={allProducts[0].price} desc={allProducts[0].desc} />
      <Product title={allProducts[1].title} count={allProducts[1].count} img={allProducts[1].img} price={allProducts[1].price} desc={allProducts[1].desc}/>
      <Product title={allProducts[2].title} count={allProducts[2].count} img={allProducts[2].img} price={allProducts[2].price} desc={allProducts[2].desc} />
      <Product title={allProducts[3].title} count={allProducts[3].count} img={allProducts[3].img} price={allProducts[3].price} desc={allProducts[3].desc}/> */}
    </div>
  );
}

export default App;
