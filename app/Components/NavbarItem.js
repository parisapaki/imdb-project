"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function NavbarItem({ title, address }) {
  const searchParam = useSearchParams();
  const search = searchParam.get("search");
  console.log(search);
  return (
    <div className="inline px-5">
      <Link
        className={`hover:text-amber-600 font-semibold ${
          search === address
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?search=${address}`}
      >
        {title}
      </Link>
    </div>
  );
}
