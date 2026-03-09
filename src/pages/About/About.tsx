import { useParams } from "react-router-dom";
import mammoth from "mammoth";
import { useEffect, useState } from "react";
import "./About.scss";

const About = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const { id } = useParams();
  if (!id) return <div>Loading...</div>;

  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/about/about${id}.docx`);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
      }
    };

    window.scrollTo({ top: 0, behavior: "smooth" });

    loadDocx();
  }, [id]);

  return (
    <div className="about-container" id="about">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default About;
