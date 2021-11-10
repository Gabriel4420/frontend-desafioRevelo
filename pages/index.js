import Head from 'next/head'
import Image from 'next/image'
import Photo from '../src/assets/logo.png'

import Menu from '../src/components/menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          ComunikMe - Especialista em relação de empresas e clientes
        </title>
        <meta
          name="description"
          content="Aplicativo para gestão de estoque e vendas"
        />
        <link rel="icon" href="/logo2.ico" />
      </Head>
      <header>
        <Menu />
      </header>

      <main className={styles.main}>
        <Image src={Photo} alt="photo" />
        <h1 className={styles.title}>
          Bem Vindo ao Sistema de gerenciamento de estoques e venda !
        </h1>
        <p>
          A Comunikime é uma empresa brasileira de integração, especialista em
          soluções de tecnologia para relacionamento entre empresas e clientes,
          utilizando a comunicação unificada para melhorar a colaboração e
          produtividade de ambientes coorporativos. ​Para atingir o nivel de
          qualidade de serviços de nosso cliente, buscamos nos aprimorar no
          segmento de atuação dele.
        </p>

        <p>
          Para isso temos times especialistas em cada área, onde auxiliamos com
          processos operacionais e de negócios, buscando sempre a solução mais
          aderente a realidade do mercado. Focamos em sempre estar a frente das
          necessidades e trazer o melhor em inovação e soluções de alta
          performance.
        </p>
      </main>
      

      <footer className={styles.footer}>
        <a
          href="https://gabriel4420.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develop by <span className={styles.author}>Gabriel Rodrigues</span>
        </a>
      </footer>
    </div>
  )
}
