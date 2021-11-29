import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Menu from '../../src/components/Menu'
import api from '../../src/services/api'
import bcrypt from 'bcryptjs'


const Register = () => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleRegister(e) {
    e.preventDefault()

    try {
      const saltpassword = await bcrypt.hash(password, 8)

      const { data: data } = await api.post('register', {
        email: email,
        password: saltpassword,
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

  return <div></div>
}

export default Register
