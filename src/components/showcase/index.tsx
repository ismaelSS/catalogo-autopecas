import Filters from '../filters'
import ProductCard from '../productCard'
import { dataBase } from '@/dataBase/db'

export default function Showcase() {
  return (
    <section className="flex pt-6">
      <div className="w-1/5 bg-green-500">
        <Filters />
      </div>

      <ul className="w-4/5 flex flex-row flex-wrap gap-2 justify-center">
        {dataBase.carParts.map((product, index) => (
          <li key={index} className='min-w-40 max-w-60 flex justify-center'>
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              promotionalPrice={product.promotionalPrice}
              flashOffer={product.flashOffer}
              inStock={product.inStock}
              freeAssembly={product.freeAssembly}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
