import AboutUs from '@/components/AboutUs/AboutUs'
import Advantages from '@/components/Avantages/Advantages'
import Discount from '@/components/Discount/Discount'
import AskUsAnything from '@/components/AskUsAnything/AskUsAnything'
import Hero from '@/components/Hero/Hero'
import SliderBlock from '@/components/MostPopular/MostPopular'
import Review from '@/components/Review/Review'

import Head from 'next/head'
import ShowCars from '@/components/ShowCars/ShowCars'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/1f5bacc93d.js" crossorigin="anonymous"></script>
      </Head>
      <Hero />
      {/* <SliderBlock /> */}
      <ShowCars />
      <AboutUs />
      <Review />
      {/* <Advantages /> */}
      <AskUsAnything />
      <Discount  />
    </>
  )
}
