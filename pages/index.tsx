import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-w-screen h-screen">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-gradient-to-br from-cyan-700 to-rose-700 text-white">
        <div className="flex flex-col items-center justify-center space-y-1 md:max-w-[70%]">
          <img
            className="lg:h-90 mb-5 w-44 rounded-full object-cover lg:w-72"
            src="https://links.papareact.com/8sg"
            alt=""
          />
          <h3 className="text-3xl font-bold text-black">
            Welcome to The Hustlers
          </h3>
          <h1 className="text-center text-2xl font-extrabold text-gray-600 lg:text-7xl">
            <span className="text-white">
              The most advanced NFT Drop MarketPlace.
            </span>
          </h1>
        </div>
        <Link href="/marketplace">
          <button className="mt-6 rounded-full bg-red-600 p-3 font-bold text-white duration-200 hover:scale-105">
            Check out MarketPlace
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
