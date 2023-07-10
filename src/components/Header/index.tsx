import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full py-10 z-50">
      <nav className="container flex justify-between">
        <Link to="#" className="flex items-center">
          <h1 className="self-center text-4xl font-bold whitespace-nowrap text-red-500">
            eb.
          </h1>
        </Link>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="#" className="text-red-500">
                about
              </Link>
            </li>
            <li>
              <Link to="#" className="text-red-500">
                publications
              </Link>
            </li>
            <li>
              <Link to="#" className="text-red-500">
                connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
