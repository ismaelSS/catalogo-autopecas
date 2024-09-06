import { iDataBase } from "@/dataBase/db";

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