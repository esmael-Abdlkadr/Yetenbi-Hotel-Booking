import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt=" Yetenbi Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Yetenbi.com
        </span>
      </Link>
    </div>
  );
}

export default Logo;
