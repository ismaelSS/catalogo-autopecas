import { dataBase, iDataBase } from "@/dataBase/db";

export interface iBrandGroup { brand: string; models: string[] }

export function groupByBrand(data: iDataBase):iBrandGroup[] {
  const grouped = data.carParts.reduce((acc, part) => {
    const brandIndex = acc.findIndex(item => item.brand === part.brand);

    if (brandIndex === -1) {
      acc.push({
        brand: part.brand,
        models: [part.carModel]
      });
    } else {
      const models = acc[brandIndex].models;
      if (!models.includes(part.carModel)) {
        models.push(part.carModel);
      }
    }

    return acc;
  }, [] as { brand: string; models: string[] }[]);

  const brandGrouped = grouped.filter(item => item.brand !== 'all');

  return brandGrouped;
}

export function filterProducts(productName?: string, brand?:string, model?:string ){
  return(
    dataBase.carParts.filter(part => {
      const nameFilter = productName ? part.name.toLowerCase().includes(productName.toLowerCase()) : true
      const brandFilter = brand ? part.brand.toLowerCase() == brand.toLowerCase() || part.brand === 'all' : true
      const modelFilter = model ? part.carModel.toLowerCase() == model.toLowerCase() || part.carModel === 'all' : true
      
      return nameFilter && brandFilter && modelFilter
    })
  )
}