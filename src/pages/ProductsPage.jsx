import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import Card from "../components/Card"
import { useSearchParams } from 'react-router-dom'
import Filter from '../components/Filter'

const ProductsPage = () => {
  const [books, setBooks] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const order = searchParams.get("sırala")
  const query = searchParams.get("aramaTerimi")

  const options = {
    params: {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3070/books", options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err))
  }, [order, query])


  return (
    <div className='text-white'>
      {!books && <Loading />}
      <h3 className='mx-5 mt-3'>
        {books?.length} kitap bulundu
      </h3>
      <Filter />
      <div className='card-container'>
        {books?.map((book) => (<Card key={book.id} book={book} />))}
      </div>
    </div>
  )
}

export default ProductsPage
