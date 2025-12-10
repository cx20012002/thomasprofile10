import WindowControls from "@/components/WindowControls";
import { blogPosts } from "@/constants/dataConstants";
import WindowWrapper from "@/hoc/WindowWrapper";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share2,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex in-checked: gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share2 className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, date, title, image, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>

              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the full post <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;

