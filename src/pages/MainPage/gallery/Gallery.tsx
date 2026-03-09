import { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Box, Typography } from "@mui/material";

const galleryItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
];

const Gallery = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [splideInstances, setSplideInstances] = useState({
    main: null,
    thumbs: null,
  });

  useEffect(() => {
    if (splideInstances.main && splideInstances.thumbs) {
      // @ts-ignore
      splideInstances.main.sync(splideInstances.thumbs);
    }
  }, [splideInstances]);

  return (
    <Box id="gallery">
      <div style={{ position: "relative" }}>
        {/* Main Carousel */}
        <div style={{ marginBottom: "10px" }}>
          <Splide
            ref={mainRef}
            options={{
              type: "fade",
              heightRatio: 0.5,
              width: "100%",
              pagination: false,
              arrows: false,
              cover: true,
            }}
            onMounted={(splide: any) => {
              setSplideInstances((prevState) => ({
                ...prevState,
                main: splide,
              }));
            }}
          >
            {galleryItems.map((item) => (
              <SplideSlide key={item.id}>
                <div
                  style={{
                    height: "300px",
                    backgroundColor: "#ddd",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    color: "#555",
                    borderRadius: "10px",
                  }}
                >
                  Slide Text {item.id}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Thumbnails Carousel */}
        <Splide
          ref={thumbsRef}
          options={{
            fixedWidth: 200,
            fixedHeight: 114,
            isNavigation: true,
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            breakpoints: {
              600: {
                fixedWidth: 76,
                fixedHeight: 45,
              },
            },
          }}
          onMounted={(splide: any) => {
            setSplideInstances((prevState) => ({
              ...prevState,
              thumbs: splide,
            }));
          }}
        >
          {galleryItems.map((item) => (
            <SplideSlide key={item.id}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "#bbb",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                  color: "#333",
                  borderRadius: "6px",
                }}
              >
                Thumb {item.id}
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <Typography
          sx={{ textAlign: "center", paddingTop: "30px", fontSize: "35px" }}
        >
          אם העיצובים האלה גרמו לכם לחייך, לדמיין או לדפדף שוב - כנראה שנועדנו
          לעבוד יחד
        </Typography>
      </div>
    </Box>
  );
};

export default Gallery;
