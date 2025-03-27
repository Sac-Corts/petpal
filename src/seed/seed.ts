interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
    pets: Pet;
}

interface SeedUser {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user';
}

type Pet = 'dogs' | 'cats' | 'fishes' | 'birds' | 'rodents' | 'reptiles' | 'amphibians' | 'exotic_animals';
type Size = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
type Type =
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
    users: SeedUser[];
    categories: string[];
    products: SeedProduct[];
}

export const initialData: SeedData = {
    users: [],
    categories: [
        'food',
        'snacks',
        'supplements',
        'bed',
        'cage',
        'aquarium',
        'hygiene',
        'medicine',
        'antiparasitic',
        'toy',
        'scratcher',
        'exercise',
        'collar',
        'leash',
        'carrier',
        'travel',
        'clothing',
        'footwear',
        'costume',
        'accessory',
        'habitat',
        'lighting',
        'filter'
    ],
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
            pets: 'dogs'
        },

        /* CATS */
        {
            description: "Perfecta para Halloween y cosplay, esta ropa de cosplay de Halloween para mascotas es perfecta para varias ocasiones, como fiestas de mascotas, Halloween, Navidad, Pascua, Acción de Gracias, accesorios de fotografía, fiestas de máscaras, fiestas temáticas de cumpleaños, etc. Añade un toque único y divertido a cualquier disfraz o atuendo.",
            images: [
                '/products/cats_1.jpg',
                '/products/cats_1.2.jpg',
            ],
            inStock: 10,
            price: 284,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "disfraz-de-capa-para-mascotas-de-halloween-capa-de-vampiro",
            type: 'costume',
            tags: ['costumes'],
            title: "Disfraz de capa para mascotas de Halloween, capa de vampiro para gatos",
            pets: 'cats'
        },
        
        /* FISHES */
        {
            description: "Dedicado a la excelencia en nutrición para los peces tropicales.",
            images: [
                '/products/fishes_1.jpg',
                '/products/fishes_1.2.jpg',
            ],
            inStock: 10,
            price: 593,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "hojuelas-basicas-lomas-1-kg",
            type: 'food',
            tags: ['food'],
            title: "HOJUELAS BASICAS LOMAS 1 KG",
            pets: 'fishes'
        },

        /* BIRDS */
        {
            description: "Alimento para aves silvestres y migratorias. Ideal para alimentar aves silvestres y de hogar.",
            images: [
                '/products/birds_1.jpg',
                '/products/birds_1.2.jpg',
            ],
            inStock: 10,
            price: 52,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "mezcla-p-aves-silvestres-y-de-hogar-900-g",
            type: 'food',
            tags: ['food'],
            title: "MEZCLA P/AVES SILVESTRES Y DE HOGAR 900 G",
            pets: 'birds'
        },

        /* RODENTS */
        {
            description: "La Mezcla de semillas para hámster de Redkite es un alimento delicioso, elaborado con una variedad de ingredientes naturales mezclados y balanceados perfectamente",
            images: [
                '/products/rodents_1.jpg',
                '/products/rodents_1.2.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "mezcla-de-semillas-p-hamster-1-kg",
            type: 'food',
            tags: ['food'],
            title: "MEZCLA DE SEMILLAS P/HAMSTER 1 KG",
            pets: 'rodents'
        },

        /* REPTILES */
        {
            description: "",
            images: [
                '/products/reptiles_1.jpg',
                '/products/reptiles_1.2.jpg',
            ],
            inStock: 10,
            price: 781,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "tetra-reptomin-floating-sticks-alimento-para-tortugas-y-anfibios-con-1-2-kilogramos",
            type: 'food',
            tags: ['food'],
            title: "Tetra Reptomin Floating Sticks Alimento para Tortugas y Anfibios con 1.2 Kilogramos",
            pets: 'reptiles'
        },

        /* AMPHIBIANS */
        {
            description: "2 bolsas de 60 gr de Alimento Balanceado flotante en forma de barrilas de 4.5 mm de grosor. Ideal para ajolotes de talla ADULTO. Contiene todos los nutrientes necesarios para el correcto desarrollo de tu mascota.",
            images: [
                '/products/amphibians_1.jpeg',
                '/products/amphibians_1.2.jpeg',
            ],
            inStock: 10,
            price: 1299,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "alimento-para-ajolotes-adulto",
            type: 'food',
            tags: ['food'],
            title: "Alimento Para Ajolotes Adulto",
            pets: 'amphibians'
        },

        /* EXOTIC ANIMALS */

    ]
}