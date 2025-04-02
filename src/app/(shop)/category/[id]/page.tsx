export default function Placeholder() {
    return <div>Placeholder for Category Page</div>;
}

// import { ProductGrid, Title } from "@/components";
// import { Pet } from "@/interfaces";
// import { initialData } from "@/seed/seed";

// const seedProducts = initialData.products;

// interface Props {
//     params: {
//         id: Pet;
//     }
// }

// export default async function CategoryPage({ params }: Props) {

//     const { id } = await params;
//     const products = seedProducts.filter(product => product.pets === id);

//     const labels: Record<Pet, string> = {
//     'dogs': 'Perros',
//     'cats': 'Gatos',
//     'fishes': 'Peces',
//     'birds': 'Aves',
//     'rodents': 'Roedores',
//     'reptiles': 'Reptiles',
//     'amphibians': 'Anfibios',
//     'exotic_animals': 'Animales Exóticos', 
//     }

//     // if (id === 'dogs') {
//     //     notFound();
//     // }

//     return (
//         <>
//             <Title
//                 title={`Artículos de ${labels[id]}`}
//                 subtitle="Todos los productos"
//                 className="mb-2"
//             />

//             <ProductGrid
//                 products={products}
//             />
//         </>
//     );
// }
