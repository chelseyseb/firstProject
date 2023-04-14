import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@styles/Home.module.css'
import Info from '@components/info'
import Student from '@components/student_info'

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
          <h1>SECOND PAGE</h1>
          <Info name="Barbie Girl" age="85"/>
          <Student address="BARBIE WORLD" school="POLYTECHNIC UNIVERSITY OF THE FILIPPINES" course="iNFORMATION TECHNOLOGY"/>
        </div>
      </main>
    </>
  )
}
