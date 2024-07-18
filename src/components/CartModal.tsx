"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Le panier est vide</div>
      ) : (
        <>
          <h2 className="text-xl">Panier</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEMS */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1387444/pexels-photo-1387444.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nom du produit</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">4900 FCFA</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Disponible</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qte. 2</span>
                  <span className="text-blue-500">Supprimer</span>
                </div>
              </div>
            </div>
            {/* ITEMS */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1387444/pexels-photo-1387444.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nom du produit</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">4900 FCFA</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Disponible</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qte. 2</span>
                  <span className="text-blue-500">Supprimer</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="">
              <span className="">Total : </span>
              <span className="">4900 FCFA</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Frais de port et taxes calculés à la caisse.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-100">
                Voir le panier
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Vérifier
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
