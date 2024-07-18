import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="text-2xl tracking-wide">
          OUZIN
        </Link>
        <Menu />
      </div>
      {/* grandecran */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* GAUCHE */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">OUZIN</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/">Boutique</Link>
            <Link href="/">Offres</Link>
            <Link href="/">A propos</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* DROITE */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
