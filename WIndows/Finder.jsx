import WindowControls from "@/components/WindowControls";
import { locations } from "@/constants/dataConstants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useLocationStore from "@/store/location";
import { Search } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useWindowStore } from "@/store/window";

const Finder = () => {
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation
  );
  const activeLocation = useLocationStore((state) => state.activeLocation);
  const openWindow = useWindowStore((state) => state.openWindow);
  const renderLisst = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="w-4"
            />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.kind === "folder") return setActiveLocation(item);
    if (['fig', 'url'].includes(item.fileType || '')) return window.open(item.href, '_blank');
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderLisst("Favorites", Object.values(locations))}
          {renderLisst("My Projects", locations.work.children || [])}
        </div>
        <ul className="content">
          {activeLocation.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <Image src={item.icon} alt={item.name} width={40} height={40} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

