import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./Article.scss"
import { useParams } from "react-router-dom";

const Article = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const {id} = useParams();
 if(!id) return <div>Loading...</div>

  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/articles/article${id}.docx`);
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
    <div className="article-container">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Article;