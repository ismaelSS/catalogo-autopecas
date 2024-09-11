import Image from 'next/image'
import BuyButton from '../buttons/buyButton'
import CardTag from '../cardTags/discount'
import CardTagMarker from '../cardTags/marker'
import FreeAssemblyIndicator from '../freeAssemblyIndicator'
import FlashOfferIndicator from '../flashOfferIndicator'

type tProductCard = {
  name: string
  price: number
  image: string
  promotionalPrice?: number
  flashOffer?: boolean
  inStock?: boolean
  freeAssembly?: boolean
}

export default function ProductCard({
  image,
  name,
  price,
  promotionalPrice,
  flashOffer,
  inStock,
  freeAssembly,
}: tProductCard) {
  const convertTOPriceFormat = (price: number | string): string => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  let discount = ''

  if (promotionalPrice) {
    discount = `${Math.floor(100 - (promotionalPrice * 100) / price)}%`
  }

  return (
    <div className="flex flex-col h-[27rem] w-full pl-[0.55rem] group relative cursor-pointer justify-center overflow-hidden">
      <div className=" absolute left-2 top-1 flex gap-2 group-hover:invisible z-10">
        {promotionalPrice && <CardTag discount={discount} />}
        {inStock && <CardTagMarker />}
      </div>
      <div className="w-full h-48  flex items-end justify-center relative pb-2">
        <Image src={image} alt={name} width={200} height={200} />
        {freeAssembly && <FreeAssemblyIndicator />}
        {flashOffer && <FlashOfferIndicator />}
      </div>
      <div className="flex flex-col p-2 w-full h-48 justify-between">
        <span className="line-clamp-2 text-ellipsis h-10 max-w-full max-h-full text10">
          {name}
        </span>

        <div className="flex flex-col mt-5 mb-5">
          {promotionalPrice && (
            <span className="text7 line-through leading-[0.20rem]">
              {convertTOPriceFormat(price)}
            </span>
          )}
          <span className="text8">
            {promotionalPrice
              ? convertTOPriceFormat(promotionalPrice)
              : convertTOPriceFormat(price)}
          </span>
          <span className="text7 leading-[0.25rem]">Á vista no PIX</span>
        </div>

        <BuyButton className="" />
      </div>
    </div>
  )
}
