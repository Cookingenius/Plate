
declare module api {

  interface IStep {
    order: number;
    picture: string;
    text: string;
  }

  interface IIngredient {
    order: number;
    quantity: number;
    food: IFood;
  }

  interface IRecipe {
    id: number;
    name: string;
    description: string;
    picture: IPicture;
    cooking_time: number;
    preparation_time: number;
    number_servings: number;
    steps: IStep[];
    ingredients: IIngredient[];

    // not implemented yet
    tags: string[];
    suggestions: string[];
  }

}