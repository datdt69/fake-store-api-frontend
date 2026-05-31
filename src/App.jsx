import { Routes,Route } from "react-router-dom"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Hero from "./components/Hero"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"


function App() {
 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <ProductList limit={4} />
        </>
      } />
      <Route path="/shop" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  )
}

export default App
