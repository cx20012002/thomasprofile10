import WindowControls from "@/components/WindowControls";
import { photosLinks } from "@/constants/dataConstants";
import { Search } from "lucide-react";
import { Mail } from "lucide-react";
import { gallery } from "@/constants/dataConstants";
import React from "react";
import Image from "next/image";
import { useWindowStore } from "@/store/window";
import WindowWrapper from "@/hoc/WindowWrapper";

const Photos = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <Image
                  src={icon}
                  alt={title}
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={(e) => {
                  e.stopPropagation(); 
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    fileType: "img",
                    imageUrl: img,
                  });
                }}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${id}`}
                  width={500}
                  height={500}
                  className="w-auto h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
