export interface Product {
    //todo: id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
<<<<<<< HEAD
    sizes: ValidSizes[];
=======
    sizes: Size[];
>>>>>>> sprint-4
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    pets: Pet;
}

export type Pet = 'dogs' | 'cats' | 'fishes' | 'birds' | 'rodents' | 'reptiles' | 'amphibians' | 'exotic_animals';
export type ValidSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ValidTypes =
    | 'food'
    | 'snacks'
    | 'supplements'
    | 'bed'
    | 'cage'
    | 'aquarium'
    | 'hygiene'
    | 'medicine'
    | 'antiparasitic'
    | 'toy'
    | 'scratcher'
    | 'exercise'
    | 'collar'
    | 'leash'
    | 'carrier'
    | 'travel'
    | 'clothing'
    | 'footwear'
    | 'costume'
    | 'accessory'
    | 'habitat'
    | 'lighting'
    | 'filter';