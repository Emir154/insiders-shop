"use client";
import { createNavTabs } from "@/app/utils/navTabs/navTabs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const pathName = usePathname();
  const navTabs = createNavTabs();

  return (
    <div className="flex flex-wrap">
      {navTabs.map(({ name, icon, draggable, url }) => {
        const isActive = pathName === url;
        return (
          <Link
            className={`flex p-3 hover:bg-gray-200 transition ${
              isActive
                ? "bg-blue-100 underline text-black"
                : "text-gray-79 hover:bg-blue-100 dark:text-gray-200"
            }`}
            key={name}
            draggable={draggable}
            href={url}
          >
            <Image src={icon} alt={name} width={20} height={20} />
            <span className="text-gray-500 m-1">{name}</span>
          </Link>
        );
      })}
    </div>
  );
}
