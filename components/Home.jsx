import React from "react";
import Image from "next/image";
import { locations } from "@/constants/dataConstants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "@/store/window";
import useLocationStore from "@/store/location";

const projects = locations.work?.children ?? [];

const Home = () => {
  const setActiveLocation = useLocationStore(
    (state) => state.setActiveLocation
  );
  const openWindow = useWindowStore((state) => state.openWindow);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <Image
              src={"/images/folder.png"}
              alt={project.name}
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
