import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import api from '../../services/api'
import { parseCookies } from 'nookies'
const Table = () => {
  const [data, setData] = useState([])
  const cookies = parseCookies()
  useEffect(() => {
    api
      .get('/products', {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((resp) => setData(resp.data.products))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Price</th>
          <th>Has Stock</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
        {data.map((data, key) => (
          <tr key={key}>
            <td>{data.name}</td>
            <td>{data.typeProduct}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
            <td>{data.has_stock ? 'yes' : 'no'}</td>
            <td>{data.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

export default Table
