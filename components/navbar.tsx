import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const navigation = [
    // { Companie: "/" },
    // { Produse: "/produse" },
    // { Contact: "/contact" },
    // { "Estimeaza Cost": "/estimeaza-cost" },
    {"":""}
  ];

  return (
    <div className="w-full bg-white">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-red-600 dark:text-gray-100">
                    <span>
                      <Image
                        src="/assets/notrito.png"
                        width="200"
                        height="50"
                        alt="Notrito-Logo"
                      />
                    </span>
                </Link>
              </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={Object.values(menu)[0]} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark:focus:bg-gray-800 dark:hover:text-red-500  dark:focus:text-red-500">
                    {Object.keys(menu)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        </div>
      </nav>
    </div>
  );
}
