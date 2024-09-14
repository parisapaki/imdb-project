import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between md:px-28 py-6">
      <div>
        <MenuItem title="Home" address="#" Icon={AiFillHome} />
        <MenuItem title="About" address="#" Icon={BsInfoCircleFill} />
      </div>
      <div className="inline">
        <DarkModeSwitch />
        <Link href="#">
          <span className="bg-yellow-400 text-white p-1.5 rounded-lg font-bold text-2xl">
            IMDb
          </span>
          <span className="mx-2 text-xl">Clone</span>
        </Link>
      </div>
    </div>
  );
}
