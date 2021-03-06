import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collectio App</title>
        <meta name="description" content="Collectio App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.instagram.com/rivaidigital/">Collectio!</a>
        </h1>

        <p className={styles.description}>
          Get started by entering{' '}
          <code className={styles.code}>/api/restaurant</code>
        </p>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/rivaidigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/rivai.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
