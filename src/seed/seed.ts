interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes?: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    pet: 'dogs' | 'cats' | 'fishes' | 'birds' | 'rodents' | 'reptiles' | 'amphibians' | 'exotic animals';
}

type ValidSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
type ValidTypes =
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

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [

        /* DOGS */
        {
            description: "Disfraz: este es el atuendo perfecto para perros tanto para uso diario como para ocasiones especiales. Se puede utilizar para tomar fotos y sesiones de fotos de Instagram, Tiktok y Snapchat. También es ideal para desfiles, Halloween, Navidad, Año Nuevo, Acción de Gracias, cumpleaños y fiestas de verano",
            images: [
                '/products/dogs_1.jpeg',
                '/products/dogs_1.2.jpeg',
            ],
            inStock: 10,
            price: 599,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "disfraz-halloween-de-perro-mascota-luigi-de-mario-bros",
            type: 'costume',
            tags: ['costumes'],
            title: "Disfraz Halloween De Perro, Mascota. Luigi De Mario Bros",
            pet: 'dogs'
        },


        /* CATS */

        /* FISHES */

        /* BIRDS */

        /* RODENTS */

        /* REPTILES */

        /* AMPHIBIANS */
        {
            description: "2 bolsas de 60 gr de Alimento Balanceado flotante en forma de barrilas de 4.5 mm de grosor. Ideal para ajolotes de talla ADULTO. Contiene todos los nutrientes necesarios para el correcto desarrollo de tu mascota.",
            images: [
                '/products/amphibians_1.jpeg',
                '/products/amphibians_1.2.jpeg',
            ],
            inStock: 10,
            price: 1299,
            slug: "alimento-para-ajolotes-adulto",
            type: 'food',
            tags: ['food'],
            title: "Alimento Para Ajolotes Adulto",
            pet: 'amphibians'
        },

        /* EXOTIC ANIMALS */
    ]
}