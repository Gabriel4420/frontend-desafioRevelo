import React from 'react'
import Container from './styles'
import Head from 'next/head'
import Menu from '../../src/components/Menu'
const Vendas = () => {
  return (
    <Container>
      <Head>
        <title>ComunikMe - Vitrine</title>
        <meta
          name="description"
          content="Aplicativo para gestão de estoque e vendas"
        />
        <link rel="icon" href="/logo2.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <div className="containerTitle">
        <h1 id="title">
          Vitrine Comunik<span id="me">Me</span>
        </h1>
      </div>
    </Container>
  )
}

export default Vendas
