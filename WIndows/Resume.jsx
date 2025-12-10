import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { Download } from "lucide-react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <Link
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Resume.pdf"
        >
          <Download className="icon" />
        </Link>
      </div>

      <Document file="files/resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer  />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;

