import { IoFlash } from 'react-icons/io5'

export default function FlashOfferIndicator() {
  return (
    <div className="flex gap-3 pl-2 bg-blue-950 items-center rounded-s-lg  absolute bottom-0 right-[-7.5rem] transition-all duration-300 group-hover:right-[-0.6rem]">
      <IoFlash className="text-yellow-500" />
      <span className="text-text1 font-bold text-xs text-nowrap p-1">
        oferta relâmpago
      </span>
    </div>
  )
}
