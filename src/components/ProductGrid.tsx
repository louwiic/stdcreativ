import Image from 'next/image';
import Link from 'next/link';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};

export default function ProductGrid() {
    // Exemple de données de produits (à remplacer par vos vraies données)
    const products: Product[] = [
        {
            id: 1,
            name: "Mug en Céramique",
            price: 75.00,
            image: "/products/mug.jpg",
            category: "Décoration"
        },
        // Ajoutez plus de produits ici
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <Link href={`/products/${product.id}`}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price} €</p>
                    </div>
                </div>
            ))}
        </div>
    );
}