import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from './styles'
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import api from '../../services/api'

const Menu = () => {
  const cookies = parseCookies()
  const [token, setToken] = useState()
  const router = useRouter()

  /* useEffect(() => {
    api
      .get('users')
      .then((resp) => setToken(resp.data.token))
      .catch((err) => console.log(err))
  }, []) */

  const handleLogout = () => {
    console.log('token:' + token)
    setToken('')
    destroyCookie(null, 'token', token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.push('/')
  }
  return (
    <Container>
      {cookies.token !== undefined ? (
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/estoque">Estoque</Link>
          </li>
         {/*  <li>
            <Link href="/vendas">Vendas</Link>
          </li> */}
          <li>
            <button
          
              className="btn btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
         {/*  <li>
            <Link href="/vendas">Vendas</Link>
          </li> */}
        </ul>
      )}
    </Container>
  )
}

export default Menu
