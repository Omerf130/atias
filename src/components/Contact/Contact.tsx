import { useState } from "react";
import "./Contact.scss";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
    // topic: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsappSend = () => {
    const { name, phone, email, /* topic, */ question } = formData;
  
    const message = `*טופס צור קשר*\n\n` +
      `*שם:* ${name}\n` +
      `*טלפון:* ${phone}\n` +
      `*אימייל:* ${email}\n` +
      // `*נושא:* ${topic}\n` +
      `*שאלה:* ${question}`;
  
    const encodedMessage = encodeURIComponent(message);
  
    const phoneNumber = "9720535277797";
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  }

  const handleEmailJsSend = async () => {
    const { name,email, /* topic */ } = formData;
  
    try {
      await emailjs.send(
        'service_n010aga',
        'template_cp4y52b',
        {name, title:/* topic */ email},
        {
          publicKey: 'XSgKtJS2N8WDjUkWO',
        },
      );
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
    
      console.log('ERROR', err);
    }
  
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleEmailJsSend();
    handleWhatsappSend();
  };


  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">צור קשר</h2>
      <div className="contact-content">
        <div className="contact-form-section">
          <h3 className="spacer-title">&nbsp;</h3>
          <div className="contact-form-wrapper">
            <div className="form-header">שלח לנו הודעה</div>
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">שם מלא *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="הכנס שם מלא"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">טלפון *</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="הכנס מספר טלפון"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">אימייל *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="הכנס כתובת אימייל"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* <div className="form-group">
              <label htmlFor="topic">נושא *</label>
              <select
                className="dropdown"
                name="topic"
                id="topic"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  בחר נושא
                </option>
                <option value="בתים משותפים/מקרקעין">בתים משותפים/מקרקעין</option>
                <option value="נזיקין">נזיקין</option>
                <option value="גישור">גישור</option>
                <option value="אחר">אחר</option>
              </select>
            </div> */}

            <div className="form-group">
              <label htmlFor="question">הודעה</label>
              <textarea
                name="question"
                id="question"
                placeholder="כתוב את הודעתך כאן..."
                rows={5}
                value={formData.question}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn-submit" type="submit">
              <span>שלח הודעה</span>
            </button>
          </form>
          </div>
        </div>

        <div className="contact-info">
          <h3>פרטי יצירת קשר</h3>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="card-header">סניפים</div>
              <div className="card-content">
                <div className="branch-item">
                  <strong>סניף צפון</strong>
                  <span>שד' ההסתדרות 285, חיפה</span>
                  <a href="tel:0535277797">053-5277797</a>
                </div>
                <div className="branch-divider"></div>
                <div className="branch-item">
                  <strong>סניף מרכז</strong>
                  <span>המסגר 35, תל אביב</span>
                  <a href="tel:0535277797">053-5277797</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header">פרטי התקשרות</div>
              <div className="card-content">
                <div className="contact-detail">
                  <strong>דואר אלקטרוני</strong>
                  <a href="mailto:ira_atias@walla.com">ira_atias@walla.com</a>
                </div>
                <div className="contact-detail">
                  <strong>שעות פעילות</strong>
                  <span>ימים א'-ה', 09:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps?ll=32.812327,35.073072&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=HaHistadrut+Ave+285+Haifa&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
