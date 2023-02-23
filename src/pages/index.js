import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <Head>
        <title>Maharani B'anica Putri</title>
        <meta
          name="description"
          content="Home page Maharani B'anica Putri Portfolio"
        />
      </Head>
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="Mathilde Langevin" className="text-[80px] leading-[70px]">
          Maharani B'anica Putri
        </h1>
        <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28">
          <div className="flex flex-col">
            <span className="font-light">Frontend Developer</span>
            {/* <span>Portfolio</span> */}
          </div>
          <div>
            Perkenalkan saya Maharani B'anica Putri merupakan siswi di SMK
            Telkom Malang dan menekuni bidang Rekayasa Perangkat Lunak (RPL), UI
            & UX Desainer
          </div>
        </div>
        <nav>
          <Link href="/contact">
            <a className="border bg-slate-700 text-white border-slate-200 p-5 px-10">
              Contact Me
            </a>
          </Link>
        </nav>
      </div>
      {/* <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
		<h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
	</div>
	<p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div> */}
      <div className="mt-10 w-full h-[300px] lg:w-1/2 lg:h-[700px] lg:mt-0">
        <img
          src="/photo/pexels-mathilde-langevin-home.jpg"
          alt="Mathilde"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
