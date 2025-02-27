"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModel from "./CartModel";

const NavIcons = () => {
  const [isprofileOpen, setIsProfileOpen] = useState(false);
  const [iscartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cur cursor-pointer"
        onClick={handleProfile}
      />
      {isprofileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cur cursor-pointer"
      />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} className="cur " />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-ELEGANT_COLOR rounded-full flex items-center justify-center text-white text-sm">
          1
        </div>
      </div>
      {iscartOpen && <CartModel />}
    </div>
  );
};

export default NavIcons;
