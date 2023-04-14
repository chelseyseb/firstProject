import Head from 'next/head'
import { Inder, Inter } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Quote from '@components/quote'
import Info from '@components/info'

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
        <Info name="Cheeeeeseu" age="2 yrs old"/>
          <h1>FIFTH PAGE</h1>
          <Quote quote="Ride or Die" />
        </div>
      </main>
    </>
  )
}