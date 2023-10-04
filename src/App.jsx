import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProductsPage from "./pages/ProductsPage"
import UndefinedPage from "./pages/UndefinedPage"
import Header from "./components/header"
import Footer from "./components/Footer"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        <Route path="/ürün/:id" element={<ProductDetail />} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
