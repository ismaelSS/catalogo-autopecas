import { FaAngleLeft, FaAnglesLeft, FaAngleRight, FaAnglesRight } from "react-icons/fa6";

type tPaginationNavigator ={
  actualPage: number
  totalPages: number
  setPageFunction: (page:number) => void
}

export default function PaginationNavigator({actualPage,totalPages,setPageFunction}:tPaginationNavigator) {


  return(
    <div className="flex gap-2 w-full items-center justify-center h-16 pb-5">
      <div className="flex gap-2 items-center justify-end flex-1">

        {actualPage > 3 && <span onClick={() => setPageFunction(1)} className="text8 w410:hover:text-[1.5rem] w410:text-[1.2rem] cursor-pointer"><FaAnglesLeft /></span>}
        {actualPage > 1 && <span onClick={() => setPageFunction(actualPage - 1)} className="text8 w410:hover:text-[1.5rem] w410:text-[1.2rem] cursor-pointer"><FaAngleLeft /></span>}
        

        {actualPage > 3 && <span className="text8  cursor-default brightness-125">...</span>}
        {actualPage > 2 && <span onClick={() => setPageFunction(actualPage - 2)} className="text8 w410:hover:text-[1.9rem] w410:text-[1.2rem] cursor-pointer">{actualPage - 2}</span>}
        {actualPage > 1 && <span onClick={() => setPageFunction(actualPage - 1)} className="text8 w410:hover:text-[1.9rem] w410:text-[1.5rem] cursor-pointer">{actualPage - 1}</span>}
      </div>

        <span className="text8 text-3xl text-purple-950 w410:text-[2rem] cursor-default brightness-90 ">{actualPage}</span>

      <div className="flex gap-2 items-center justify-start flex-1">

        {totalPages - actualPage >= 1 && <span onClick={() => setPageFunction(actualPage + 1)} className="text8 w410:hover:text-[1.9rem] w410:text-[1.5rem] cursor-pointer">{actualPage + 1}</span>}
        {totalPages - actualPage >= 2 && <span onClick={() => setPageFunction(actualPage + 2)} className="text8 w410:hover:text-[1.9rem] w410:text-[1.2rem] cursor-pointer">{actualPage + 2}</span>}
        {totalPages - actualPage >= 3 && <span className="text8 cursor-default">...</span>}


        {totalPages - actualPage >= 1 && <span onClick={() => setPageFunction(actualPage + 1)} className="text8 w410:hover:text-[1.5rem] w410:text-[1.2rem] cursor-pointer"><FaAngleRight/></span>}
        {totalPages - actualPage >= 3 && <span onClick={() => setPageFunction(totalPages)} className="text8 w410:hover:text-[1.5rem] w410:text-[1.2rem] cursor-pointer"><FaAnglesRight/></span>}
      </div>
    </div>
  )
}