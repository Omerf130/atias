import mammoth from "mammoth";
import { useEffect, useState } from "react";
import "./Accessability.scss"

const accessability = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/accessability/accessability.docx`);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
      }
    };

    loadDocx();
  }, []);
  return (
    <div className="accessability-container">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default accessability;
