import React, { useState } from 'react'
import Container from './styles'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Menu from '../../src/components/Menu'
import Link from 'next/link'
import api from '../../src/services/api'
import { setCookie } from 'nookies'
import bcrypt from 'bcryptjs'

const Login = () => {
  const [token, setToken] = useState()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const saltpassword = await bcrypt.hash(password, 8)

      const { data: data } = await api.post('login', {
        email: email,
        password: saltpassword
      })

      if (
        (await data.user.email) !== email &&
        (await data.user.password) !== saltpassword
      ) {
        alert('email ou senha incorretos')
        router.push('/login')
      } else {
        setCookie(null, 'token', data.token, {
          maxAge: 86400 * 7,
          path: '/',
        }),
          setToken(data.token)
        router.push('/estoque')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Head>
        <title>ComunikMe - Login</title>
        <meta
          name="description"
          content="Aplicativo para gestão de estoque e vendas"
        />
        <link rel="icon" href="/logo2.ico" />
      </Head>
      <header>
        <Menu />
      </header>

      <section className="form">
        <h1>Faça seu Login</h1>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <input
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link id="link" href="/register">
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </Container>
  )
}

export default Login
