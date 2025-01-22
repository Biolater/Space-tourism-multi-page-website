const NavItem: React.FC<{
  children: React.ReactNode;
  isActive: boolean;
  href: string;
}> = ({ children, isActive, href }) => {
  return (
    <li>
      <a
        className={`text-preset-8 block w-full cursor-pointer transition-colors duration-500 ${
          isActive
            ? "border-b-[0.1875rem]"
            : "border-b-[0.1875rem] border-white/0 hover:border-white/70"
        } font-barlow uppercase text-base tracking-[0.125rem]`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
