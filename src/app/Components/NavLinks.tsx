import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: 'Home',
   href: '/' },
  {
    name: '¿Quiénes Sómos?',
    href: '/about'
  },
  { 
    name: 'Servicios', 
    href: '/services' 
  },
  {
    name: 'Blog Táctico',
    href: '/blog'
  }
];


export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-white hover:bg-[theme(colors.golden)] hover:text-black rounded-lg p-2
                ${pathname === link.href ? 'bg-[theme(colors.golden)] text-black':''}`
              }
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}