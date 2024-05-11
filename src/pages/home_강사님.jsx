import { useEffect, useState } from 'react';
import './home.css';
import {} from 'react-icons';
import {Circles} from 'react-loader-spinner';

export default function Home()
{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListProducts(){
    setLoading(true);
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    console.log(data);
    if(data){
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(()=>{
    fetchListProducts();
  }, [])     

  return(
    <div>
      {
        loading ? (
          <div className="my-loading">
            <Circles height={'120'} width={'120'} color='rgb(127, 29, 29)' visible={true}/>
          </div>
        ) : (
          <div className='my-product-grid'>
            {
              products.map((product, idx)=>{
                return(
                  <div>상품</div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}