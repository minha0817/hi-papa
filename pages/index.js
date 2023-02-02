import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import IncidentReport from '../components/IncidentReport'
import Navbar from '../components/navbar'

// 얘가 홈페이지임 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi papa</title>
        <meta name="description" content="Reporting webpage for day cares" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>main page</h1>
        {/* <IncidentReport /> */}
      </main>
    </>
  )
}
