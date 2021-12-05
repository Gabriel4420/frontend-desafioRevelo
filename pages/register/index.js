import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../src/components/Menu'
import api from '../../src/services/api'
import bcrypt from 'bcryptjs'
import * as C from './styles'
import { setCookie } from 'nookies'

const Register = () => {
  const [token, setToken] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [typeCamp, setTypeCamp] = useState('password')

  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleRegister(e) {
    e.preventDefault()

    try {
      const saltpassword = await bcrypt.hash(password, 8)

      const { data: data } = await api.post('user', {
        name: name,
        email: email,
        password: saltpassword,
      })

      router.push('/login')
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleCampText = () => {
    setTypeCamp('text')
  }

  const handleCampPassWord = () => {
    setTypeCamp('password')
  }

  return (
    <C.Container>
      <Head>
        <title>ComunikMe - Cadastrar Usuário</title>
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
        <h1>Cadastro</h1>
        <form method="POST" onSubmit={handleRegister}>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <C.InputPassword
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={typeCamp}
              
            />
            <button  onDoubleClick={handleCampText} onClick={ handleCampPassWord } className="showPassword">
             {typeCamp == 'password' ? '👁️':'🔑'}
            </button>
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </section>
    </C.Container>
  )
}

export default Register
