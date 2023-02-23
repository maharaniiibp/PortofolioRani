import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutMe() {
  const data = [
    { gambar: '/photo/capcat.jpeg', nama: 'Edit Video', tanggal: 'video with capcut' },
    { gambar: '/photo/fourniture.jpg', nama: 'Web-Fourniture', tanggal: 'Web with React js' },
    { gambar: '/photo/kelompok4.jpg', nama: 'Web-Kelompok', tanggal: 'Web with React' },
    { gambar: '/photo/masak.jpg', nama: 'UI&UX Desain', tanggal: 'Desain with Figma' },
  ]
  const biodata = [
    { name: "Sekolah", value: "SMK Telkom Malang" },
    { name: "Jurusan", value: "Rekayasa Perangkat Lunak" },
    { name: "Alamat", value: "Tulungagung, Ngunut" },
    { name: "Umur", value: "17 tahun" },
    { name: "Tgl Lahir", value: "01 Juni 2005" },

  ];

  return (
    <section id="about-me" className="flex flex-col lg:gap-14 lg:flex-col w-full">
      <Head>
        <title>About Maharani</title>
        <meta name="description" content="About Maharani Portfolio" />
      </Head>
      <div className="wrapper flex flex-col-reverse md:flex-row gap-x-24 w-full">
        <div className="space-y-5 w-80 md:w-1/3 grid place-content-center text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-5xl">
            <span className="font-bold">About Me</span>
          </h1>
          <p className='text-2xl'>Introduce my name</p>
          <p>Hallo!!👋 my name is Maharani, you can call me Rani or Rain</p>
          <div class="flex flex-col mx-auto">
                  <ul className="text-sm text-grey-800 md:text-lg">
                    {biodata?.map((isi) => (
                      <li className="flex mb-2">
                        {isi.name} : {isi.value}
                      </li>
                    ))}
                  </ul>
                </div>
        </div>
        <div className="w-2/3 mt-10 lg:mt-0 mb-4 md:mb-0 md:h-[700px] mx-auto">
          <video controls className='w-full'>
            <source src='/photo/video.mp4' type='video/mp4'/> 
          </video>
        </div>
      </div>
    <br/>
      <span className="text-center font-bold text-5xl">My Skills</span>
      <div className="flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {data.map((data) => (
            <li className="bg-white rounded-md overflow-hidden m-auto mx-8 mb-4 w-36 md:w-60 hover:shadow-2xl text-left p-4">
              <Image
                width={200}
                height={250}
                src={data.gambar}
                alt=""
                className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
              />
              <p className="text-base">
                <strong>{data.nama}</strong>
              </p>
              <p className="text-sm mb-2">{data.tanggal}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
