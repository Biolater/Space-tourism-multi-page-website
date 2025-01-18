import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../icons/Logo";

const Navbar = () => {
  return (
    <header className="min-h-[5.5rem] flex">
      <div className="px-6 flex items-center w-full justify-between">
        <a className="" href="/">
          <Logo />
        </a>
        <button>
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
