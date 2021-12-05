import React, { useState } from 'react'
import Head from 'next/head'
import Menu from '../../src/components/Menu'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import api from '../../src/services/api'
import Container from './styles'
const CadastroProduto = () => {
  const [nomeProduto, setNomeProduto] = useState('')

  const [tipoProduto, setTipoProduto] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [preco, setPreco] = useState(0)
  const [descricao, setDescricao] = useState('')
  const router = useRouter()
  const cookies = parseCookies()

  const handleProduct = async (e) => {
    e.preventDefault()

    try {
      const { data: data } = await api.post(
        'product',
        {
          name: nomeProduto,
          typeProduct: tipoProduto,
          quantity: quantidade,
          price: preco,
          description: descricao,
          has_stock: true,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
            'Content-Type': 'application/json',
          },
        },
      )

      router.push('/estoque')
    } catch (error) {
      console.log(error)
    }
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
        <form method="POST" onSubmit={handleProduct}>
          <label >Digite o nome do produto</label>
          <input
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            name="nomeProduto"
            required
          />
          <label >Digite o tipo/categoria do produto</label>
          <input
            name="tipoProduto"
            value={tipoProduto}
            onChange={(e) => setTipoProduto(e.target.value)}
            required
          />
          <label >
            Digite a quantidade que será atribuida ao estoque deste produto
          </label>
          <input
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            type="number"
            name="quantidade"
            required
          />
          <label >Digite o preço atribuido ao produto</label>
          <input
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            type="number"
            name="preco"
            required
          />
          <label >Descreva seu produto</label>
          <textarea
            maxLength="320"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </section>
    </Container>
  )
}

export default CadastroProduto
