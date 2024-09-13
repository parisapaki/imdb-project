import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div className="inline px-4">
      <Link href={address}>
        <span className="uppercase hidden md:inline">{title}</span>
        <Icon className="inline md:hidden text-2xl" />
      </Link>
    </div>
  );
}
