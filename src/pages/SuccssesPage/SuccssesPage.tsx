import { useEffect, useState } from "react";
import mammoth from "mammoth";
import { useLocation, useParams } from "react-router-dom";

const SuccessesPage = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const { id } = useParams();
  const location = useLocation()
  if (!id) return <div>Loading...</div>;

  useEffect(() => {

    const loadDocx = async () => {
      const endPoint = location.pathname.split("/")[1];
      try {
        const response = await fetch(`/success/${endPoint}/${endPoint}${id}.docx`);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
      }
    };
   


    loadDocx();
  }, []);

  if(htmlContent) window.scrollTo({ top: 0, behavior: "smooth" });


  return (
    <div className="article-container">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default SuccessesPage;
