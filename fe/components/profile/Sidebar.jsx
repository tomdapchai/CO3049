"use client";

import Link from "next/link";
import { sidebar } from "@/Dummy_data";
import { usePathname } from "next/navigation";

export default function Sidebar({ href }) {
  const path = usePathname();
  return (
    <aside className="w-auto bg-white">
      <h2 className="block text-gray text-2xl border-b-2 px-3 py-2 mb-2">
        My Account
      </h2>
      <nav className="space-y-2 px-4">
        <ul className="space-y-4">
          {sidebar.map((item) => (
            <li
              key={`${item.slug}_${item.name}`}
              id={`${item.slug}_${item.name}`}
              className={`block text-gray-700 font-medium py-2 px-3 rounded-md ${
                path.startsWith(`${href}/${item.slug}`)
                  ? "bg-gray-200 text-black"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Link href={`${href}/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
