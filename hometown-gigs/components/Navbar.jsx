import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#192428] shadow-md shadow-[#CDCDCD]">
      <Link href="/">
        <button className="p-4 font-bold rounded-lg bg-[#738290]  text-3xl text-[#08090A] hover:text-opacity-70">
          Hometown Gigs
        </button>
      </Link>
      <ul className="flex text-xl ">
        <li className=" text-[#CDCDCD] hover:text-[#E5E5E5]">
          <Link href="/music">Music</Link>
        </li>
        <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
          <Link href="/shows">Shows</Link>
        </li>
        <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
          <Link href="/artistry">Artistry</Link>
        </li>
        <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="ml-6 text-[#CDCDCD] hover:text-[#E5E5E5]">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <Link href="/login">
        <button className="text-lg font-semibold text-[#738290] hover:text-[#E5E5E5]">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
