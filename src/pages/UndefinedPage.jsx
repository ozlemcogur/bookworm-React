import React from 'react'
import { useLocation } from 'react-router-dom'

const UndefinedPage = () => {
  const { state } = useLocation()

  return (
    <div style={{ height: "80vh" }} className=' container py-5 text-center'>
      <img className="img-fluid rounded"
        src='https://media2.giphy.com/media/YyKPbc5OOTSQE/200w.webp?cid=ecf05e47xd8e0r19ea7d61b72m4gujhhumumoixzw26p760p&ep=v1_gifs_related&rid=200w.webp&ct=g' />
      <p className='text-white text-center fs-3 my-5' >
        Üzgünüz aradığınız sayfa bulunamadı</p>
      {state && (
        <p className='text-white text-center'>
          Hata Kodunuz <span className='badge bg-warning'>{state}</span>
        </p>)}
    </div>
  )
}

export default UndefinedPage
