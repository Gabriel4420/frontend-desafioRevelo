import Head from 'next/head'
import { useRouter } from 'next/router'
/* Estilos Próprios */
import { Container } from './styles'
import Menu from '../../src/components/Menu'
import Table from '../../src/components/Table'
import ButtonAdd from '../../src/components/ButtonAdd'

const Estoque = () => {
  const router = useRouter()

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
