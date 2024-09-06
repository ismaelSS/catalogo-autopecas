import MainBanner from '@/components/banners/mainBanner'
import BrandsCarousel from '@/components/bradsCarousel'
import CustomHeader from '@/components/header'
import Showcase from '@/components/showcase'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full max-w-[1580px]'>
      <CustomHeader />
      <MainBanner />
      <BrandsCarousel />
      <Showcase />
    </main>
  )
}
