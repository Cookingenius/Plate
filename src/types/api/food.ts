
declare module api {

  interface IFoodCategory {
    id: number;
    name: string;
  }

  interface IFood {
    id: number;
    name: string;
    category: IFoodCategory;

    fat: number
    carbs: number;
    proteins: number;

    calcium: number;
    cholesterol: number;
    fat_mono: number;
    fat_poly: number;
    fat_saturated: number;
    fiber: number;
    iron: number;
    magnesium: number;
    potassium: number;
    sodium: number;
    sugar: number;
    unit_weight: number;
    vitamin_a: number;
    vitamin_c: number;
  }

}
