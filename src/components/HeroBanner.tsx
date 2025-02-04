import Image from 'next/image';

interface HeroBannerProps {
    title?: string;
    subtitle?: string;
}

const HeroBanner = ({ title, subtitle }: HeroBannerProps) => {
    return (
        <div className="relative h-[400px] w-full">
            <Image
                src="/banner/banner.webp"
                alt="Hero Banner"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" /> {/* Overlay sombre */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
                {title && (
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <p className="text-xl md:text-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HeroBanner;