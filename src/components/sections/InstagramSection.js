import SectionTitle from "../SectionTitle";
import "../../css/components/sections/instagramSection.css";
import { imagesSource } from "../../helpers/sections";

const InstagramSection = () => {
  const mappedImages = imagesSource.map((image) => {
    return (
      <img
        width={243}
        height={243}
        key={image.id}
        src={`./assets/images/${image.imageSource}`}
        alt={`${image.imageDescription}`}
      />
    );
  });

  return (
    <section className="instagram-section-container">
      <SectionTitle title="Instagram" customizedTitleButton="+Seguir" />
      <div className="instagram-images-container">
          {mappedImages}
          {mappedImages}
      </div>
    </section>
  );
};

export default InstagramSection;
