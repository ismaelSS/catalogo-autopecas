import { iBrandGroup } from '@/utils/functions'
import CheckBox from '../checkBox'

export default function BradModelFilter(
  data: iBrandGroup[],
  selectBrand: (brand: string) => void,
  selectModel: (model: string) => void,
  brandSelected: string,
  modelSelected: string
) {
  return (
    <div>
      {data.map((group, index) => (
        <div key={index}>
          <CheckBox
            label={group.brand}
            onClick={() => selectBrand(group.brand)}
            selected={brandSelected === group.brand}
          />
          <div>
            {group.models.map((model, index) => (
              <CheckBox
                label={model}
                onClick={() => selectModel(model)}
                selected={modelSelected === model}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
