'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { brandsLogos } from '@/ProjectData/logos'
import Image from 'next/image'

function BrandsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  }
  return (
    <div className="bg-main1 flex flex-col overflow-hidden text-center gap-12 pt-16 pb-16">
      <span className="text5"> Marcas Parceiras </span>

      <div className="slider-container relative left-[20%]">
        <Slider {...settings} className="w-3/5 gap-3">
          {brandsLogos.map((brand) => (
            <div key={brand.name} className="p-0">
              <Image
                src={brand.link}
                alt={`imagem de ${brand.name}`}
                width={200}
                height={100}
                className="w-28"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BrandsCarousel
