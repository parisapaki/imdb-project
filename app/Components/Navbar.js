import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="bg-amber-100 dark:bg-gray-600 text-lg p-4 flex justify-center">
      <NavbarItem title="Trending" address="Trending" />
      <NavbarItem title="TopRated" address="TopRated" />
    </div>
  );
}
