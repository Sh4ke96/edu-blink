import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-20 shadow-base">
      <div>
        <ul className="flex">
          <li className="px-6">
            <Link href="/about">About us</Link>
          </li>
          <li className="px-6">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="px-6">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
