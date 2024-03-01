import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/constants/link";

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
                ${pathname === link.href ? 'bg-[theme(colors.golden)] text-black' : ''}`
            }
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}