import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./AboutCompany.scss";

const AboutCompany = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/aboutCompany/aboutCompany.docx`);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
      }
    };
    window.scrollTo({ top: 0, behavior: "smooth" });

    loadDocx();
  }, []);
  return (
    <div className="about-company-container">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default AboutCompany;
