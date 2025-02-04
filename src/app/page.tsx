import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import HeroBanner from '@/components/HeroBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroBanner
          title="Std Créativ"
          subtitle="Découvrez nos produits exceptionnels"
        />
        {/* Hero Section */}
        <section className="mb-12">
          {/*   <h1 className="text-4xl font-bold mb-4">Découvrez nos produits</h1>
          <p className="text-gray-600">Les meilleurs articles pour votre intérieur</p> */}
        </section>

        {/* Products Grid */}
        <ProductGrid />
      </main>
    </div>
  );
}
