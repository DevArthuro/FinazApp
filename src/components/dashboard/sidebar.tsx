"use client";

import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const Sidebar = () => {
  const currentPath = usePathname();
  const MENU_BAR = [
    {
      id: 1,
      name: "Panel",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Bolsillos",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Gastos",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrades",
      icon: ShieldCheck,
      path: "/dashboard/upgrades",
    },
  ];

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image
        src="/logo.svg"
        alt="logo"
        width={160}
        height={160}
        className="mb-5"
      />
      <div>
        {MENU_BAR.map((menu) => (
          <Link href={menu.path}>
            <h2
              key={menu.id}
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 mb-2 ${
                currentPath === menu.path && "text-primary bg-blue-100"
              }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 item-center">
        <UserButton />
        Perfil
      </div>
    </div>
  );
};

export default Sidebar;
