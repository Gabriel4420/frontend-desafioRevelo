import Head from 'next/head'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
/* Estilos Próprios */
import  Container  from './styles'
import Menu from '../../src/components/Menu'
import Table from '../../src/components/Table'
import ButtonAdd from '../../src/components/ButtonAdd'
import { parseCookies } from 'nookies'
import api from '../../src/services/api'

const Estoque = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const cookies = parseCookies()
  
  /* useEffect(() => {
     api.get('users',{
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        'Content-Type': 'application/json',
      },
    },).then((resp) => setData(resp.data.users))
  },[]) */



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
  
      <div className="containertable">
       
        <div className="table">
          <Table />
        </div>
        <ButtonAdd onClick={() => router.push('cadastroProduto')} />
      </div>
    </Container>
  )
}

export default Estoque
