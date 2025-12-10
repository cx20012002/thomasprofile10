import Image from "next/image";
import { navIcons, navLinks } from "@/constants/dataConstants";
import dayjs from "dayjs";
import { useWindowStore } from "@/store/window";

const Navbar = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  
  return (
    <nav>
      <div>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="w-auto h-auto"
          unoptimized
        />
        <p className="font-bold">Thomas&apos;s Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt={`icon-${id}`}
                width={24}
                height={24}
                className="w-auto h-auto"
                unoptimized
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("D ddd MMM h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;

