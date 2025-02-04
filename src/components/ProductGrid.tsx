import Image from 'next/image';
import Link from 'next/link';

type Product = {
    id: number;
    name: string;
    price: number;
    oldPrice?: number; // Prix avant réduction
    image: string;
    category: string;
    rating: number;
    thc: string;
    cbd: string;
    onSale?: boolean;
};

export default function ProductGrid() {
    const products: Product[] = [
        {
            id: 1,
            name: "Tangerine Dream",
            price: 5.88,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 4,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%"
        },
        {
            id: 2,
            name: "High CBD 50 Oil",
            price: 5.99,
            oldPrice: 7.97,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 5,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%",
            onSale: true
        },
        {
            id: 3,
            name: "Tangerine Dream",
            price: 5.88,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 4,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%"
        },
        {
            id: 4,
            name: "High CBD 50 Oil",
            price: 5.99,
            oldPrice: 7.97,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 5,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%",
            onSale: true
        },
        {
            id: 5,
            name: "Tangerine Dream",
            price: 5.88,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 4,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%"
        },
        {
            id: 6,
            name: "High CBD 50 Oil",
            price: 5.99,
            oldPrice: 7.97,
            image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg",
            category: "Huile CBD",
            rating: 5,
            thc: "117.00-23.00%",
            cbd: "0.00-1.00%",
            onSale: true
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Produits Vedettes</h2>
            <p className="text-center text-gray-600 mb-8">Découvrez notre sélection de produits premium</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-sm">
                        <div className="relative">
                            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                <Link href={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </h3>
                            <div className="mt-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {product.oldPrice && (
                                        <span className="text-gray-400 line-through">${product.oldPrice}</span>
                                    )}
                                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                </div>
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                                    Je veux
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}