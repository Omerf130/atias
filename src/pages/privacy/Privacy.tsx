import mammoth from "mammoth";
import "./Privacy.scss"
import { useEffect, useState } from "react";
const Privacy = () => {
    const [htmlContent, setHtmlContent] = useState<string>("");
  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/privacy/privacy.docx`);
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
    <div className="privacy-container">
       <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  )
}

export default Privacy
