'use client'

import { filterProducts, groupByBrand } from '@/utils/functions'
import ProductCard from '../productCard'
import { dataBase } from '@/dataBase/db'
import { useState } from 'react'
import ComboBoxFilter from '../comboBoxFilter'
import SearchInput from '../searchInput'


export default function Showcase() {
  const [brandSelected, setBrandSelected] = useState('')
  const [modelSelected, setModelSelected] = useState('')
  const [productName, setProductName] = useState('')

  const brandsGroups = groupByBrand(dataBase)
  const brands = brandsGroups.map((brand) => (brand.brand))
  let models = ['']

  if (brandSelected) {
    const brand = brandsGroups.find(brand => brand.brand === brandSelected);
    if (brand) {
      models = brand.models;
    }
  }

  const selectBrand = (brand: string) => {
    if (brandSelected === brand) {
      setBrandSelected('')
      setModelSelected('')
    } else {
      setBrandSelected(brand)
      setModelSelected('')
    }
  }
  const selectModel = (model: string) => {
    if (modelSelected === model) {
      setModelSelected('')
    } else {
      setModelSelected(model)
    }
  }

  const productsFiltereds = filterProducts(productName, brandSelected, modelSelected)

  return (
    <section className="flex pt-6 flex-col" id='showCase'>
      <div className=" w-full flex flex-col  gap-3 p-3 pt-0 sm:flex-row">

        <SearchInput placeholder='Procurar produto' onChange={(value) => setProductName(value)}/>
        <ComboBoxFilter itemSelected={brandSelected} itenslist={brands} placeholder='Selecionar Marca' selectItemFunction={selectBrand} typePlaceHolder='Digitar Marca'/>
        
        {
          brandSelected &&
          <ComboBoxFilter itemSelected={modelSelected} itenslist={models} placeholder='Selecionar Modelo' selectItemFunction={selectModel} typePlaceHolder='Digitar modelo'/>
        }


      </div>

      <ul className="w-full grid grid-cols-1 w410:grid-cols-2 items-center sm:grid-cols-3 w1131:grid-cols-5 lg:grid-cols-5 gap-2 pr-2 pl-2">
  {productsFiltereds.map((product, index) => (
    <li key={index} className=" sm:w-full md:min-w-56 md:max-w-72 ">
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
