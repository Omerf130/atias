import { useNavigate } from "react-router-dom"

interface SlideProps {
  description: string
  headline:string
  image: string
  id: number
}
const Slide = ({description, headline, image, id}:SlideProps) => {
  const navigate = useNavigate();

  return (
    <div className="slide-card" dir="rtl">
    <img className="slide-image" src={image} alt={headline} />
    <div className="slide-content">
      <h4 className="slide-headline">{headline}</h4>
      <p className="slide-description">{description}</p>
      <button className="slide-button" onClick={() => navigate(`/article/${id}`)}>לקריאה נוספת</button>
    </div>
  </div>
  )
}

export default Slide