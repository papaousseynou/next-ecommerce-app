import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-homme-blond-debout-pantalon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nom du produit</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Ma description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 yexy-xs hover:bg-lama hover:text-white">
          Ajouter au panier
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-homme-blond-debout-pantalon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nom du produit</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Ma description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 yexy-xs hover:bg-lama hover:text-white">
          Ajouter au panier
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-homme-blond-debout-pantalon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nom du produit</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Ma description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 yexy-xs hover:bg-lama hover:text-white">
          Ajouter au panier
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-homme-blond-debout-pantalon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nom du produit</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Ma description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 yexy-xs hover:bg-lama hover:text-white">
          Ajouter au panier
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
