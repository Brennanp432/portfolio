import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-body">
      <Head>
        <title>Patrick Brennan</title>
        <meta name="description" content="Patrick Brennan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <h1 className="">
          Welcome!
        </h1>
      </main>
    </div>
  )
}

export default Home
