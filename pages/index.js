import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Dórea | Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Meu Portfolio</h1>

        <p>Criado por: <a href="https://brunodorea.github.io/">Bruno Dórea</a></p>

        <div className={styles.grid}>

          <a href="https://blogdobruno.gatsbyjs.io/" target="__blank" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Blog criado com o GatsbyJs</p>
          </a>

          <a href="https://orkut-dio.netlify.app/" target="__blank" className={styles.card}>
            <h2>Orkut Clone &rarr;</h2>
            <p>Projeto prático da DIO para recriação da interface do Orkut.</p>
          </a>

          <a href="https://spiderverso.netlify.app/" target="__blank" className={styles.card}>
          <h2>Homem Aranha no multiverso &rarr;</h2>
            <p>Criando um site com HTML + CSS + JavaScript sobre o multiverso dos filmes do Homem Aranha.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
