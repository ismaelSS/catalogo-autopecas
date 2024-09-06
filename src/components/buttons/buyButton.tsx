import { FaShoppingCart } from 'react-icons/fa'

type iBuyButton = {
  className?: string
}

export default function BuyButton({ className }: iBuyButton) {
  return (
    <button
      className={`bg-main1 flex items-center p-2 justify-center gap-2 rounded-sm text9 h-9${className}`}
    >
      <FaShoppingCart className="w-5 h-5 hidden group-hover:block" />
      <span>COMPRAR</span>
    </button>
  )
}
