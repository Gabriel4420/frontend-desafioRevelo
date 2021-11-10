import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Menu from '../../src/components/Menu'
import { Container } from './styles'
import { parseCookies } from 'nookies'
const CadastroProduto = () => {
  const [data, setData] = useState([])

  const [nomeProduto, setNomeProduto] = useState('')

  const [tipoProduto, setPassword] = useState('')


  const cookies = parseCookies()

  const handleProduct = () => {
    useEffect(() => {
      api
        .post('/products', {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .then((resp) => {setData(resp.data.products)})
        .catch((err) => console.log(err))
    }, [])
  }
  return (
    <Container>
      <Head>
        <title>ComunikMe - Estoque</title>
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
        <h2>Cadastro de Produto</h2>
        <form onSubmit={handleProduct}>
          <input
            placeholder="Digite o nome do produto"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
          />
          <input
            placeholder="Digite o tipo do produto"
            /*  value={password} */
            /* onChange={(e) => setPassword(e.target.value)}
            type="password" */
          />
          <input
            placeholder="Quantidade"
            /*  value={password} */
            /* onChange={(e) => setPassword(e.target.value)}
             */
            type="number"
          />
          <input
            placeholder="preço"
            /*  value={password} */
            /* onChange={(e) => setPassword(e.target.value)}
            type="password" */
            type="number"
          />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </section>
    </Container>
  )
}

export default CadastroProduto
