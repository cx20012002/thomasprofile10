"use client";

import React, { useRef } from "react";
import { useWindowStore } from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

// 注册 Draggable 插件（必须！）
gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const windows = useWindowStore((state) => state.windows);
    const focusWindow = useWindowStore((state) => state.focusWindow);

    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      // 做动画（例如从透明到不透明）
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => {
          focusWindow(windowKey);
        },
      });
      
      return () => instance.kill();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onClick={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;

