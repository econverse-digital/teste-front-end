import { Carousel } from "react-carousel-minimal";

function BodyCarousel() {
  const data = [
    {
      image: "./assets/carrosel/1.png",
    },
    {
      image: "./assets/carrosel/2.png",
    },
    {
      image: "./assets/carrosel/3.png",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="BodyCarousel.js">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BodyCarousel;
