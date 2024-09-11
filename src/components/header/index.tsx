import Link from 'next/link'
import OrderButton from '../buttons/orderButton'
import SheetMenu from '../sheetMenu'

export default function CustomHeader() {
  return (
    <header className="max-w-[1580px] bg-main1 w-full flex justify-between items-center p-4 pb-10 overflow-hidden">
      <span className="flex flex-col items-center text-3xl font-bold text-text1 relative top-1">
        Silva <span className="text2 relative bottom-2">autopeças</span>
      </span>

      <div className=" items-center gap-4 hidden w410:flex">
        <nav>
          <ul className="text2 flex items-center gap-3">
            <li className="cursor-pointer">
              <Link href='#showCase'>Catálogo</Link>  
            </li>
            <li className="cursor-pointer">
              <Link href='#social'>Social</Link>
            </li>
          </ul>
        </nav>

        <OrderButton />
      </div>
          <SheetMenu/>
    </header>
  )
}
