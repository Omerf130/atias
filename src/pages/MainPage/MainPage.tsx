import AboutCompany from '../MainPage/aboutCompany/AboutCompany'
import AboutMe from './AboutMe/AboutMe'
import Articles from './articles/Articles'
import Hero from './hero/Hero'
import { /* propertyData, */ damageData } from '../../const/Articles'
import { successDamageData/* , successHouseData  */} from '../../const/Succsses'
import Succsses from './succsses/Succsses'
import Rec from './rec/Rec'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <Hero/>
      <AboutCompany/>
      {/* <AboutMe isProperty={true}/> */}
      {/* <Articles slides={propertyData} title="מאמרים בנושא מקרקעין ובתים משותפים" sectionName="propertySection"/> */}
      {/* <Succsses componentType="house" data={successHouseData} title="הצלחות המשרד בתחום המקרקעין ובתים משותפים"/> */}
      <AboutMe isProperty={false}/>
      <Articles slides={damageData} title="מאמרים בנושא נזיקין" sectionName="damageSection"/>
      <Succsses componentType="damage" data={successDamageData} title= "הצלחות המשרד בתחום הנזיקין"/>
      <Rec/>
    </div>
  )
}

export default MainPage