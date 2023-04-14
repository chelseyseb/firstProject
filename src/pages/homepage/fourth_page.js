import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Hobby from '@components/hobby'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Student ID</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>  
          <h1>FOURTH PAGE</h1>
          <Hobby hobby="Cook and Eaaaaat" music="Taylor Swift songss" />
        </div>
      </main>
    </>
  )
}