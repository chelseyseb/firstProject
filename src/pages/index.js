import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
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
           <Info name="Christine Chelsey Sebastian" age="21" address="San Juan City"
           school="PUP Main" course="BSIT"/>
           <Student address="San Juan City"
           school="PUP Main" course="BSIT"/>
        </div>
      </main>
    </>
  )
}
