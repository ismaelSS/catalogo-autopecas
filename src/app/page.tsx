import MainBanner from '@/components/banners/mainBanner'
import BrandsCarousel from '@/components/bradsCarousel'
import CustomHeader from '@/components/header'
import PersonFooter from '@/components/personFooter'
import Showcase from '@/components/showcase'

export default function Home() {
  return (
    <main className='w-full max-w-[1580px]'>
      
      <MainBanner />
      <BrandsCarousel />
      <Showcase />

    </main>
  )
}
