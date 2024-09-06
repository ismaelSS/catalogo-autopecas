'use client'

import CheckBox from '../checkBox'
import { useState } from 'react'
import { dataBase } from '@/dataBase/db'
import { groupByBrand } from '@/utils/functions'

export default function Filters() {
  const [brandSelected, setBrandSelected] = useState('')
  const [modelSelected, setModelSelected] = useState('')

  const brandsGroups = groupByBrand(dataBase)

  const selectBrand = (brand: string) => {
    if (brandSelected === brand) {
      setBrandSelected('')
      setModelSelected('')
    } else {
      setBrandSelected(brand)
      setModelSelected('')
    }
  }
  const selectModel = (model: string, brand: string) => {
    if (modelSelected === model) {
      setModelSelected('')
      setBrandSelected(brand)
    } else {
      setModelSelected(model)
      setBrandSelected(brand)
    }
  }

  return (
    <div className="w-full pt-16 pb-16 pl-2">
      <span className="font-semibold text-xl">Marcas</span>
      <div className="flex flex-col gap-2 pl-2">
        {brandsGroups.map((group, index) => (
          <div key={index}>
            <CheckBox
              label={group.brand}
              onClick={() => selectBrand(group.brand)}
              selected={brandSelected === group.brand}
            />
            <div
              className={`flex flex-col gap-1 pl-3 transition-all duration-200 overflow-hidden ${
                brandSelected === group.brand
                  ? 'max-h-full opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {group.models.map((model, index) => (
                <CheckBox
                  label={model}
                  onClick={() => selectModel(model, group.brand)}
                  selected={modelSelected === model}
                  key={index}
                  type="secondary"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
