import OrderButton from "../buttons/orderButton";


export default function CustomHeader() {
  return(
    <header className="bg-main1 flex justify-between items-center p-4 pb-10">
      <span className="flex flex-col items-center text-3xl font-bold text-text1 relative top-1">Ellen <span className="text2 relative bottom-2"> autopeças</span></span>

      <div className="flex items-center gap-4">
        <nav >
          <ul className="text2 flex items-center gap-3">
            <li className="cursor-pointer">Catálogo</li>
            <li className="cursor-pointer">Contatos</li>
          </ul>
        </nav>

        <OrderButton/>
      </div>
    </header>
  )
}