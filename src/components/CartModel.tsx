"use client";

import Image from "next/image";
// import { useCartStore } from "@/hooks/useCartStore";
// import { media as wixMedia } from "@wix/sdk";
// import { useWixClient } from "@/hooks/useWixClient";
// import { currentCart } from "@wix/ecom";

const CartModal = () => {
  // TEMPORARY
  // const cartItems = true;

  //   const wixClient = useWixClient();
  //   const { cart, isLoading, removeItem } = useCartStore();

  //   const handleCheckout = async () => {
  //     try {
  //       const checkout =
  //         await wixClient.currentCart.createCheckoutFromCurrentCart({
  //           channelType: currentCart.ChannelType.WEB,
  //         });

  //       const { redirectSession } =
  //         await wixClient.redirects.createRedirectSession({
  //           ecomCheckout: { checkoutId: checkout.checkoutId },
  //           callbacks: {
  //             postFlowUrl: window.location.origin,
  //             thankYouPageUrl: `${window.location.origin}/success`,
  //           },
  //         });

  //       if (redirectSession?.fullUrl) {
  //         window.location.href = redirectSession.fullUrl;
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="text-xl">Cart Is Empty</div>
      ) : (
        <>
          <h2>Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="">
                {/* TOP */}
                <div className="flex flex-col justify-between w-full">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50  rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">SubTotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
