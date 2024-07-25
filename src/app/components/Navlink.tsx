"use client";
import { usePathname } from "next/navigation";
import { RiLayout2Line } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";

const links = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: <RiLayout2Line />,
  },
  {
    name: "Medicaments",
    href: "/dashboard/medicaments",
    icon: <IoTrashBinOutline />,
  },
];

export default function Navlink() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center text-small font-medium p-6 hover:bg-[#009099] focus:outline-none focus:ring focus:ring-[#009099] ${
              isActive ? "bg-[#009099] text-white" : ""
            }`}
          >
            <span className="text-3xl ml-3.5 mr-[15px]">{link.icon}</span>
            <p>{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
