import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = (e) => {
    searchParams.set("sırala", e.target.value)
    setSearchParams(searchParams)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    searchParams.set("aramaTerimi", e.target[0].value)
    setSearchParams(searchParams)
  }
  return (
    <div className='d-flex justify-content-between align-items-center px-2'>
      <div className='mx-5 mt-3 fs-5'>
        <label className='me-3'>İsme göre sırala</label>
        <select value={searchParams.get("sırala")} onChange={handleChange} className='px-4'>
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className='d-flex gap-2'>
        <input placeholder='kitap ismi giriniz' className='form-control'></input>
        <button className='btn btn-primary'>Ara</button>
      </form>
    </div>
  )
}

export default Filter
