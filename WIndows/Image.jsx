"use client";

import { useWindowStore } from "@/store/window";
import WindowControls from "@/components/WindowControls";
import React from "react";
import Image from "next/image";
import WindowWrapper from "@/hoc/WindowWrapper";

const ImageFile = () => {
  const windows = useWindowStore((state) => state.windows);
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <Image
              src={imageUrl}
              alt={name}
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;

