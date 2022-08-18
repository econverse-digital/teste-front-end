import React from "react";
import * as Style from "./styled";
import img1 from "../../Assets/img/blog/image9.png";
import img2 from "../../Assets/img/blog/image24.png";
import img3 from "../../Assets/img/blog/image44.png";
import img4 from "../../Assets/img/blog/image63.png";

const Blog = () => {
  return (
    <Style.MainContainer>
      <h2>Confira o nosso Blog</h2>
      <Style.BoxBlog>
        <Style.Publication>
          <img src={img3} alt="Cachorro sentado" />
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            aperiam?
          </p>
          <button>LER ARTIGO</button>
        </Style.Publication>
        <Style.Publication>
          <img src={img1} alt="Mulher com cachorro" />
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            aperiam?
          </p>
          <button>LER ARTIGO</button>
        </Style.Publication>
        <Style.Publication>
          <img src={img4} alt="Homem com cachorro" />
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            aperiam?
          </p>
          <button>LER ARTIGO</button>
        </Style.Publication>
        <Style.Publication>
          <img src={img2} alt="Cachorro dormindo" />
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            aperiam?
          </p>
          <button>LER ARTIGO</button>
        </Style.Publication>
      </Style.BoxBlog>
    </Style.MainContainer>
  );
};

export default Blog;
