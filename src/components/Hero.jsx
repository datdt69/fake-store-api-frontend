import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='text-white py-5 mb-4 d-flex align-items-center'
    style={{
      background: "#3D3B3B",
      minHeight: '380px'
    }}>
      <div className='container text-center py-4'>
        <h1 className='display-4 fw-bold mb-3'>
          Welcom to our store
        </h1>
        <p className='lead mb-4 text-light-50'>
          Discover amazing products at great prices.
        </p>
        <Link to={"/shop"} className='btn btn-light btn-lg px-4 py-3 fw-bold'>
          Buy Now<FaArrowRight />
        </Link>
      </div>
    </div>
  )
}
