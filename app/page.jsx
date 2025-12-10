"use client";
import Welcome from "@/components/Welcome";
import Terminal from "@/WIndows/Terminal";
import Navbar from "@/components/Navbar";
import Dock from "@/components/Dock";
import Safari from "@/WIndows/Safari";

import dynamic from "next/dynamic";
import Finder from "@/WIndows/Finder";
import TextWindow from "@/WIndows/Text";
import ImageWindow from "@/WIndows/Image";
import ContactWindow from "@/WIndows/Contact";
import Home from "@/components/Home";
import PhotosWindow from "@/WIndows/Photos";

// ✅ 动态加载 ResumeWindow，并禁用 SSR
const DynamicResumeWindow = dynamic(() => import("@/WIndows/Resume"), {
  ssr: false, // 关键：确保只在客户端渲染
  loading: () => <p>加载简历组件...</p>, // 可选的加载占位符
});

export default function Page() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <DynamicResumeWindow />
      <Finder />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
      <PhotosWindow />
      <Home />
    </>
  );
}
